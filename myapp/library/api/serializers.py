from rest_framework import serializers
from myapp.library.models import Product, Member

member_detail_url = serializers.HyperlinkedIdentityField(
        view_name='lib_api:member_detail',
        lookup_field='pk'
        )

product_detail_url = serializers.HyperlinkedIdentityField(
        view_name='lib_api:product_detail',
        lookup_field='pk'
        )

class MemberListSerializer(serializers.ModelSerializer):
    url = member_detail_url
    class Meta:
        model = Member
        fields = [
            'url',
            'branch',
            'agent',
            'employer',
            'account_no',
        ]

class MemberDetailSerializer(serializers.ModelSerializer):
    employer_name = serializers.SerializerMethodField()
    agent_name = serializers.SerializerMethodField()
    branch_name = serializers.SerializerMethodField()
    class Meta:
        model = Member
        fields = [
            'branch_name',
            'agent_name',
            'employer_name',
            'account_no',
        ]

    def get_employer_name(self, object):
        return object.employer.name

    def get_agent_name(self, object):
        return object.agent.f_name + ' ' + object.agent.l_name

    def get_branch_name(self, object):
        return object.branch.name

class ProductListSerializer(serializers.ModelSerializer):
    url = product_detail_url
    # user = UserDetailSerializer(read_only=True)
    class Meta:
        model = Product
        fields = [
            'url',
            # 'user',
            'id',
            'name',
            'code',
            'member',
            'disbursement_date',
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    url = product_detail_url
    member = MemberDetailSerializer(read_only=True)
    # user = UserDetailSerializer(read_only=True)
    # image = SerializerMethodField()
    # html = SerializerMethodField()
    # comments = SerializerMethodField()
    class Meta:
        model = Product
        fields = [
            'url',
            # 'user',
            'id',
            'name',
            'code',
            'member',
            'disbursement_date',
        ]

class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    member = serializers.HyperlinkedRelatedField(
        many=False,
        view_name='lib_api:member_detail',
        queryset=Member.objects.all(),
        style={'base_template': 'input.html'},
    )
    class Meta:
        model = Product
        fields = [
            'name',
            'code',
            'member',
            'disbursement_date',
        ]
