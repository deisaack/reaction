from django.contrib import admin
from .models import Employer, Product, Member, Branch, Agent


class MemberInline(admin.TabularInline):
    model = Member
    extra = 0


class ProductInline(admin.TabularInline):
    model = Product
    extra = 0


class MemberAdmin(admin.ModelAdmin):
	inlines = [
        ProductInline
	]

	class Meta:
		model = Member
admin.site.register(Member, MemberAdmin)


class BranchAdmin(admin.ModelAdmin):
	inlines = [
		MemberInline
	]

	class Meta:
		model = Branch
admin.site.register(Branch, BranchAdmin)


class AgentAdmin(admin.ModelAdmin):
	inlines = [
		MemberInline
	]

	class Meta:
		model = Agent
admin.site.register(Agent, AgentAdmin)

class EmployerAdmin(admin.ModelAdmin):
	inlines = [
		MemberInline
	]

	class Meta:
		model = Employer
admin.site.register(Employer, EmployerAdmin)

# admin.site.register(Product)

