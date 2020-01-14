import { Component, OnInit } from "@angular/core";
import { TestService } from '../test.service';

@Component({
	selector: "Test",
	templateUrl: "test.component.html",
	styleUrls: [ "test.component.scss" ]
})
export class TestComponent implements OnInit
{

	private name = "Hello World!";
	private items = [ "First", "Second", "Third" ];

	private inputVar = "I am in TestComponent and I'm binded to the property (not attribute)";

	private users: { name: string; surname: string }[];

	private cssBindingClass = "text-orange";
	private hasError = true;

	private conditionalCSSClasses = {
		"text-orange": this.hasError,
		"text-underline": false,
		"text-padding": true
	} 

	private textColor = "red";

	private randomNum = 20;

	private writtenText = "";

	private autoSyncTextInput = "";

	public constructor(service: TestService)
	{
		this.users = service.getUsers();
	}

	public ngOnInit()
	{
	}

	public onButtonClick()
	{
		this.randomNum = Math.ceil(Math.random() * 1000);
	}

	public onButtonClickWithEvent(event: MouseEvent)
	{
		this.randomNum = event.x;
	}

	public onReferenceButtonClick(input: HTMLInputElement)
	{
		this.writtenText = input.value;
	}
}
