// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css'] // Optional: Add your styles if needed
// })
// export class RegisterComponent {
//   registrationForm: FormGroup;
//   loading = false;
//   errorMessage: string | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     // Initialize the form group with validators
//     this.registrationForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   // Getter for easy access to form controls
//   get f() {
//     return this.registrationForm.controls;
//   }

//   // Method to handle form submission
//   onSubmit() {
//     // Check if the form is valid
//     if (this.registrationForm.invalid) {
//       return; // Stop if the form is invalid
//     }

//     this.loading = true; // Set loading to true
//     this.errorMessage = null; // Clear any previous error messages

//     // Make the API call to register the user
//     this.http.post('api/register', this.registrationForm.value)
//       .subscribe({
//         next: (response: any) => {
//           console.log('Registration successful', response);
//           this.router.navigate(['/login']); // Navigate to the login page on success
//         },
//         error: (error) => {
//           this.errorMessage = error.error.message || 'Registration failed'; // Set error message
//           this.loading = false; // Reset loading state
//         }
//       });
//   }
// }



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] // Optional: Add your styles if needed
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form group with validators
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method to handle registration form submission
  onSubmit() {
    // Check if the form is valid
    if (this.registerForm.invalid) {
      return; // Stop if the form is invalid
    }

    this.loading = true; // Set loading to true
    this.errorMessage = null; // Clear any previous error messages

    // Make the API call to register
    this.http.post('api/register', this.registerForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']); // Redirect to the login page after successful registration
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Registration failed'; // Set error message
          this.loading = false; // Reset loading state
        }
      });
  }
  goToRegister() {
    this.router.navigate(['/login']); // Redirect to the registration page
  }
}

