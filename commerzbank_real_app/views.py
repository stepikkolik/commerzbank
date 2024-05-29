from django.shortcuts import render
from django.http import HttpResponse, request
from .forms import EntryForm, NameForm

def op(request):
    return render(request, 'commerzbank_real_app/index.html')

# def register(request):
#     success_message = None
#     if request.method == 'POST':
#         form = EntryForm(request.POST, request.FILES)
#         if form.is_valid():
#             form.save()
#             success_message = "Registration successful! Thank you for registering."
#             form = EntryForm()  # Reset the form after successful submission
#     else:
#         form = EntryForm()
#     return render(request, 'commerzbank_real_app/index.html', {'form': form, 'success_message': success_message})


def get_name(request):
    if request.method == "POST":
    # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
    # check whether it's valid:
        if form.is_valid():
        # process the data in form.cleaned_data as required
        # ...
        # redirect to a new URL:
            return HttpResponseRedirect("/thanks/")

# if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, "commerzbank_real_app/index.html", {"form": form})
