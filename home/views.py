from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.template import RequestContext
from django.template.loader import render_to_string
from django.contrib import messages

from . import forms
from portfolio import settings

from django.core.mail import send_mail
 
def index(request):
	context = {}

	#Contact form, email sending
	if request.method == "POST":
		form = forms.EmailForm(request.POST)

		context["form"] = form

		if form.is_valid():
			name = form.cleaned_data["name"]
			email = form.cleaned_data["email"]
			message = form.cleaned_data["message"]

			msg_plain = render_to_string('email_template.txt', {"name" : name, "email" : email, "message" : message})

			send_mail("Contact message", msg_plain, "aleksi.robot@gmail.com" , ["aleksi.monaco@hotmail.com"])
			messages.success(request, 'Message was successfully sent!')
			return redirect('/')
	else:
		if request.GET.get("success") is not None:
			context["success"] = request.GET.get("success")

		context["form"] = forms.EmailForm()

	return render(request, "index.html", context)
