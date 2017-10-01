from django.shortcuts import render
from django.views import generic
from myapp.mixins import TitleMixin
from myapp.library.models import Member, Product, Employer, Agent, Branch
from django.urls import reverse_lazy


class AgentCreateView(TitleMixin, generic.CreateView):
    model = Agent
    fields = '__all__'
    title = 'Add an Agent'
    template_name = 'library/form.html'

class AgentDeleteView(generic.DeleteView):
    model = Agent
    template_name = 'library/delete_form.html'
    success_url = reverse_lazy('lib:agent_list')

class AgentDetailView(generic.DetailView):
    model = Agent

class AgentListView(TitleMixin, generic.ListView):
    model = Agent
    title = 'Agents'
    template_name = 'library/list.html'

class AgentUpdateView(TitleMixin, generic.UpdateView):
    model = Agent
    fields = '__all__'
    title = 'Update an Agent'
    template_name = 'library/form.html'

class BranchCreateView(TitleMixin, generic.CreateView):
    model = Branch
    fields = '__all__'
    title = 'Add a Branch'
    template_name = 'library/form.html'


class BranchDeleteView(generic.DeleteView):
    model = Branch
    template_name = 'library/delete_form.html'
    success_url = reverse_lazy('lib:branch_list')


class BranchDetailView(generic.DetailView):
    model =  Branch

class BranchUpdateView(TitleMixin, generic.UpdateView):
    model = Branch
    fields = '__all__'
    title = 'Add a Branch'
    template_name = 'library/form.html'

class BranchListView(TitleMixin, generic.ListView):
    model = Branch
    title = 'Branches'
    template_name = 'library/list.html'

class EmployerCreateView(TitleMixin, generic.CreateView):
    model = Employer
    fields = '__all__'
    title = 'Add an Employer'
    template_name = 'library/form.html'

class EmployerDeleteView(generic.DeleteView):
    model = Employer
    template_name = 'library/delete_form.html'
    success_url = reverse_lazy('lib:employer_list')

class EmployerDetailView(generic.DetailView):
    model = Employer

class EmployerListView(TitleMixin, generic.ListView):
    model = Employer
    title = 'Employers'
    template_name = 'library/list.html'

class EmployerUpdateView(TitleMixin, generic.UpdateView):
    model = Employer
    fields = '__all__'
    title = 'Add an Employer'
    template_name = 'library/form.html'

class MemberCreateView(TitleMixin, generic.CreateView):
    model = Member
    fields = '__all__'
    title = 'Add a member'
    template_name = 'library/form.html'

class MemberDeleteView(generic.DeleteView):
    model = Member
    template_name = 'library/delete_form.html'
    success_url = reverse_lazy('lib:member_list')

class MemberDetailView(generic.DetailView):
    model = Member

class MemberListView(TitleMixin, generic.ListView):
    model = Member
    title = 'Members'
    template_name = 'library/list.html'

class MemberUpdateView(TitleMixin, generic.UpdateView):
    model = Member
    fields = '__all__'
    title = 'Add a member'
    template_name = 'library/form.html'

class ProductCreateView(generic.CreateView):
    model = Product
    fields = '__all__'
    title = 'Add a Product'
    template_name = 'library/form.html'

class ProductDeleteView(generic.DeleteView):
    model = Product
    template_name = 'library/delete_form.html'
    success_url = reverse_lazy('lib:product_list')

class ProductDetailView(TitleMixin, generic.DetailView):
    model = Product

class ProductListView(TitleMixin, generic.ListView):
    model = Product
    title = 'Products'
    template_name = 'library/report.html'

class ProductUpdateView(generic.UpdateView):
    model = Product
    fields = '__all__'
    title = 'Add a Product'
    template_name = 'library/form.html'
