import requests
import sys
from datetime import datetime
import json

class WebakoofAPITester:
    def __init__(self, base_url="https://modern-webakoof.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.failed_tests.append({'name': name, 'error': 'Timeout'})
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            self.failed_tests.append({'name': name, 'error': 'Connection error'})
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({'name': name, 'error': str(e)})
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root API Endpoint", "GET", "api/", 200)

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        test_email = f"test_{datetime.now().strftime('%H%M%S')}@example.com"
        success, response = self.run_test(
            "Newsletter Subscription",
            "POST",
            "api/newsletter",
            200,
            data={"email": test_email}
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'email', 'timestamp']
            for field in required_fields:
                if field not in response:
                    print(f"⚠️  Warning: Missing field '{field}' in response")
                    return False
            
            if response['email'] != test_email:
                print(f"⚠️  Warning: Email mismatch - sent {test_email}, got {response['email']}")
                return False
                
        return success

    def test_newsletter_duplicate_email(self):
        """Test newsletter subscription with duplicate email"""
        test_email = "duplicate@example.com"
        
        # First subscription should succeed
        success1, _ = self.run_test(
            "Newsletter First Subscription",
            "POST",
            "api/newsletter",
            200,
            data={"email": test_email}
        )
        
        if not success1:
            return False
            
        # Second subscription should fail with 400
        success2, _ = self.run_test(
            "Newsletter Duplicate Email",
            "POST",
            "api/newsletter",
            400,
            data={"email": test_email}
        )
        
        return success2

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "phone": "+91 9876543210",
            "email": f"contact_{datetime.now().strftime('%H%M%S')}@example.com",
            "message": "This is a test message from automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'name', 'phone', 'email', 'message', 'timestamp']
            for field in required_fields:
                if field not in response:
                    print(f"⚠️  Warning: Missing field '{field}' in response")
                    return False
            
            # Verify data integrity
            for field in ['name', 'phone', 'email', 'message']:
                if response[field] != test_data[field]:
                    print(f"⚠️  Warning: {field} mismatch - sent {test_data[field]}, got {response[field]}")
                    return False
                    
        return success

    def test_contact_form_validation(self):
        """Test contact form with missing fields"""
        incomplete_data = {
            "name": "Test User",
            "email": "test@example.com"
            # Missing phone and message
        }
        
        # This should fail validation (expecting 422 for validation error)
        success, _ = self.run_test(
            "Contact Form Validation",
            "POST",
            "api/contact",
            422,
            data=incomplete_data
        )
        
        return success

    def test_newsletter_invalid_email(self):
        """Test newsletter with invalid email format"""
        invalid_data = {"email": "invalid-email-format"}
        
        # This should fail validation (expecting 422 for validation error)
        success, _ = self.run_test(
            "Newsletter Invalid Email",
            "POST",
            "api/newsletter",
            422,
            data=invalid_data
        )
        
        return success

def main():
    print("🚀 Starting Webakoof API Testing...")
    print("=" * 50)
    
    tester = WebakoofAPITester()
    
    # Run all tests
    tests = [
        tester.test_root_endpoint,
        tester.test_newsletter_subscription,
        tester.test_newsletter_duplicate_email,
        tester.test_newsletter_invalid_email,
        tester.test_contact_form_submission,
        tester.test_contact_form_validation,
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test {test.__name__} crashed: {str(e)}")
            tester.failed_tests.append({'name': test.__name__, 'error': f'Test crashed: {str(e)}'})
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"📊 API Test Results:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%" if tester.tests_run > 0 else "   Success Rate: 0%")
    
    if tester.failed_tests:
        print(f"\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            error_msg = failure.get('error', f"Expected {failure.get('expected')}, got {failure.get('actual')}")
            print(f"   - {failure['name']}: {error_msg}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())