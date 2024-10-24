// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'] // Optional: Add your styles if needed
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   loading = false;
//   errorMessage: string | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     // Initialize the form group with validators
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   // Getter for easy access to form controls
//   get f() {
//     return this.loginForm.controls;
//   }

//   // Method to handle form submission
//   onSubmit() {
//     // Check if the form is valid
//     if (this.loginForm.invalid) {
//       return; // Stop if the form is invalid
//     }

//     this.loading = true; // Set loading to true
//     this.errorMessage = null; // Clear any previous error messages

//     // Make the API call to log in
//     this.http.post('api/login', this.loginForm.value)
//       .subscribe({
//         next: (response: any) => {
//           console.log('Login successful', response);
//           this.router.navigate(['/dashboard']); // Navigate to the dashboard on success
//         },
//         error: (error) => {
//           this.errorMessage = error.error.message || 'Login failed'; // Set error message
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Optional: Add your styles if needed
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form group with validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Getter for easy access to form controls
  get f() {
    return this.loginForm.controls;
  }

  // Method to handle form submission
  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.invalid) {
      return; // Stop if the form is invalid
    }

    this.loading = true; // Set loading to true
    this.errorMessage = null; // Clear any previous error messages

    // Make the API call to log in
    this.http.post('api/login', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']); // Navigate to the home page on success
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Login failed'; // Set error message
          this.loading = false; // Reset loading state
        }
      });
  }

  // Method to navigate to the registration page
  goToRegister() {
    this.router.navigate(['/register']); // Redirect to the registration page
  }
}
