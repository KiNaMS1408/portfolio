import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';


@Component({
selector: 'app-contact',
templateUrl: './contact.component.html',
styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
contactForm!: FormGroup;
submitted = false;
success = false;
error: string | null = null;


constructor(private fb: FormBuilder, private contactService: ContactService) {}


ngOnInit(): void {
this.contactForm = this.fb.group({
name: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
message: ['', [Validators.required, Validators.minLength(10)]]
});
}


onSubmit(): void {
this.submitted = true;
if (this.contactForm.invalid) return;


this.contactService.sendMessage(this.contactForm.value).subscribe({
next: () => { this.success = true; this.contactForm.reset(); this.submitted = false; },
error: (err) => { this.error = 'Fehler beim Senden'; console.error(err); }
});
}
}