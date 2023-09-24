مهاجرت به نسخه دولوپر ( dev )

1- وارد سرورتون خود شوید  و دستورات زیر را اجرا کنید.
→ cd /opt/marzban  
→ nano docker-compose.yml

2- خط سوم از latest به dev تغییر بدید
و تغییرات ذخیره کنید.

به عنوان مثال:
قبل : marzban:latest
بعد: marzban:dev 

3- در نهایت با دستور :
→ marzban update
به نسخه dev میرید.

