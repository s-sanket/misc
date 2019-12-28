
exports.factorial=function(n)
{
	fact=1;
	for(i=1;i<=n;i++)
		fact=fact*i;
	return fact;
}

exports.prime=function(n)
{
	count=0;
	for(i=2;i<n/2;i++)
	{
		if(n%i==0)
		{count++;
			break;
		}
	}
	if(count==0)
		return "Prime!!!!";
	else
		return "Not prime!!!";	
}
exports.table=function(n)
{
	for(i=1;i<=10;i++)
	{
		console.log(n*i);
	}
}

