import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	formContact: FormGroup = this.fb.group({});

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
		this.formContact = this.fb.group({
			name: [null],
			number: [null],
			message: [null],
		});
	}

	onSubmit(){
		
	}

}
