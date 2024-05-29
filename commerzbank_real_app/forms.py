from django import forms
from .models import Entry

# class EntryForm(forms.ModelForm):
#     class Meta:
#         model = Entry
#         fields = ['first_name', 'last_name', 'email', 'phone_number', 'zivotopis', 'motivacni_dopis']
#         widgets = {
#             'zivotopis': forms.ClearableFileInput(attrs={'class': 'opacity-0'}),
#             'motivacni_dopis': forms.ClearableFileInput(attrs={'class': 'opacity-0'}),
#         }

# class EntryForm(forms.ModelForm):
#     class Meta:
#         model = Entry
#         fields = ['first_name', 'last_name', 'email', 'phone_number', 'zivotopis', 'motivacni_dopis']
#         widgets = {
#             'first_name': forms.TextInput(attrs={'class': 'w-full p-3 border rounded-lg', 'placeholder': "Jméno"}),
#             'last_name': forms.TextInput(attrs={'class': 'w-full p-3 border rounded-lg'}),
#             'email': forms.EmailInput(attrs={'class': 'w-full p-3 border rounded-lg'}),
#             'phone_number': forms.TextInput(attrs={'class': 'w-full p-3 border rounded-lg'}),
#             'zivotopis': forms.ClearableFileInput(attrs={'class': 'opacity-0'}),
#             'motivacni_dopis': forms.ClearableFileInput(attrs={'class': 'opacity-0'}),
#         }


class NameForm(forms.Form):
    your_name = forms.CharField(label="Your name", max_length=100)