from django import forms
from django.core.validators import RegexValidator

class EmailForm(forms.Form):
	name = forms.CharField(widget=forms.TextInput(attrs={"class" : "form-control", "placeholder" : "Name"}),
		error_messages={'required': 'Please enter your name'}, min_length=2,
		validators=[
		RegexValidator(
			regex='^[a-zA-Z]*$',
            message='Name can only contain letters',
            code='invalid_name'
            )
		]
	)
	email = forms.EmailField(widget=forms.TextInput(attrs={"class" : "form-control", "placeholder" : "Email"}),
		error_messages={'required': 'Please enter your email', 'invalid': 'Please enter a valid email'})
	message = forms.CharField(widget=forms.Textarea(attrs={"class" : "form-control", "placeholder" : "Message"}),
		error_messages={'required': 'Please write a message'})
	