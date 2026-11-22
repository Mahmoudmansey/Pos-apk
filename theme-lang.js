/* theme-lang.js — إضافة: تبديل اللغة (عربي / English) + المظهر (فاتح / داكن / مع النظام)
   الاستخدام: ضع هذا الملف بجانب ملف النظام، وأضف قبل </body> السطر:
   <script src="theme-lang.js"></script>                                                  */
(function(){
var DICT=`مطعم الأصيل=>Al-Aseel Restaurant
نظام نقاط البيع وإدارة المطاعم — تسجيل الدخول=>Restaurant POS & management — Sign in
نظام نقاط البيع POS=>POS System
اسم المستخدم=>Username
كلمة المرور=>Password
دخول النظام=>Sign in
دخول كأدمن=>Sign in as Admin
دخول ككاشير=>Sign in as Cashier
الحسابات الافتراضية:=>Default accounts:
مدير النظام:=>Administrator:
كاشير 2:=>Cashier 2:
كاشير:=>Cashier:
نسيت كلمة المرور؟ استعادة الحسابات الافتراضية=>Forgot password? Restore default accounts
أدخل اسم المستخدم وكلمة المرور=>Enter username and password
اسم المستخدم أو كلمة المرور غير صحيحة=>Wrong username or password
الحسابات:=>Accounts:
هذا الحساب موقوف — راجع مدير النظام=>This account is suspended — contact the administrator
التشغيل=>Operations
لوحة التحكم=>Dashboard
نقطة البيع=>Point of sale
الطلبات والفواتير=>Orders & invoices
الإدارة=>Management
إدارة المنيو=>Menu management
أقسام المنيو=>Menu categories
حسابات الموظفين=>Staff accounts
إعدادات النظام=>System settings
مدير النظام=>Administrator
كاشير=>Cashier
تسجيل الخروج=>Sign out
هل تريد تسجيل الخروج من النظام؟=>Do you want to sign out?
مبيعات اليوم=>Today's sales
طلبات اليوم=>Today's orders
إجمالي المبيعات=>Total sales
أصناف المنيو=>Menu items
حسابات نشطة=>Active accounts
مبيعات آخر 7 أيام=>Sales — last 7 days
الأصناف الأكثر مبيعاً=>Top-selling items
لا توجد مبيعات بعد=>No sales yet
آخر الطلبات=>Recent orders
عرض الكل ←=>View all →
رقم الطلب=>Order #
الكاشير=>Cashier
النوع=>Type
الأصناف=>Items
الدفع=>Payment
الإجمالي=>Total
الوقت=>Time
محلي=>Dine-in
سفري=>Takeaway
توصيل=>Delivery
طاولة=>Table
نقدي=>Cash
بطاقة=>Card
لا توجد طلبات بعد — ابدأ من نقطة البيع=>No orders yet — start from the POS
ابحث عن صنف...=>Search item...
الكل=>All
لا توجد أصناف مطابقة=>No matching items
السلة=>Cart
تفريغ=>Clear
رقم الطاولة (اختياري)=>Table number (optional)
السلة فارغة=>Cart is empty
اختر أصنافاً من المنيو لبدء الطلب=>Pick items from the menu to start an order
الإجمالي الفرعي=>Subtotal
الخصم=>Discount
الإجمالي النهائي=>Grand total
دفع نقدي=>Pay cash
دفع بطاقة=>Pay by card
تفريغ السلة=>Clear cart
هل تريد حذف جميع الأصناف من السلة؟=>Remove all items from the cart?
إتمام الدفع=>Complete payment
المبلغ المستحق=>Amount due
المبلغ المستلم=>Amount received
المبلغ بالضبط=>Exact amount
الباقي للعميل=>Change due
مرر البطاقة على جهاز الدفع ثم اضغط تأكيد=>Tap the card on the terminal, then confirm
تأكيد الدفع=>Confirm payment
المبلغ المستلم أقل من المطلوب!=>Amount received is less than required!
فاتورة ضريبية=>Tax invoice
فاتورة=>Invoice
الصنف=>Item
سعر=>Price
كمية=>Qty
إجمالي=>Total
المدفوع=>Paid
الباقي=>Change
الكاشير:=>Cashier:
تم الدفع بنجاح!=>Payment successful!
طباعة الفاتورة=>Print invoice
شكراً لزيارتكم — نتشرف بخدمتكم دائماً=>Thank you for visiting — we are honored to serve you
إغلاق=>Close
إلغاء=>Cancel
تأكيد=>Confirm
كل الطلبات=>All orders
نقدي فقط=>Cash only
بطاقة فقط=>Card only
عدد الطلبات:=>Orders:
الإجمالي:=>Total:
الرقم=>No.
التاريخ=>Date
إجراءات=>Actions
لا توجد طلبات في هذه الفترة=>No orders in this period
حذف طلب=>Delete order
تم حذف الطلب=>Order deleted
بحث في المنيو...=>Search the menu...
كل الأقسام=>All categories
إضافة صنف جديد=>Add new item
القسم=>Category
السعر=>Price
متاح في POS=>Available in POS
تعديل=>Edit
لا توجد أصناف=>No items
تعديل صنف=>Edit item
الاسم بالعربية *=>Arabic name *
الاسم بالإنجليزية=>English name
أيقونة الصنف=>Item icon
صورة الصنف (اختياري)=>Item photo (optional)
إزالة الصورة=>Remove photo
متاح للبيع في نقطة البيع=>Available for sale in the POS
حفظ=>Save
حذف صنف=>Delete item
تم تعديل الصنف=>Item updated
تمت إضافة الصنف=>Item added
تم حذف الصنف=>Item deleted
تنظيم أقسام المنيو — الترتيب يؤثر على ظهور الأقسام في شاشة البيع=>Organize menu categories — the order sets how they appear on the sales screen
إضافة قسم=>Add category
قسم جديد=>New category
تعديل قسم=>Edit category
اسم القسم *=>Category name *
الأيقونة=>Icon
اللون=>Color
تم تعديل القسم=>Category updated
تمت إضافة القسم=>Category added
تم حذف القسم=>Category deleted
حذف قسم=>Delete category
إدارة حسابات الكاشير والمدير — الصلاحيات تحدد الشاشات المتاحة لكل مستخدم=>Manage cashier and admin accounts — roles decide which screens each user can open
إضافة حساب=>Add account
(أنت)=>(you)
نشط=>Active
موقوف=>Suspended
إيقاف=>Suspend
تنشيط=>Activate
حذف=>Delete
حساب جديد=>New account
تعديل حساب=>Edit account
الاسم الكامل *=>Full name *
اسم المستخدم *=>Username *
كلمة المرور *=>Password *
كلمة مرور جديدة (اتركها فارغة للإبقاء)=>New password (leave empty to keep)
الصلاحية=>Role
كاشير — نقطة البيع والطلبات فقط=>Cashier — POS and orders only
مدير النظام — جميع الصلاحيات=>Administrator — full access
الحالة=>Status
تم تحديث الحساب=>Account updated
تمت إضافة الحساب=>Account added
تم حذف الحساب=>Account deleted
بيانات المنشأة (تظهر في الفاتورة)=>Business details (shown on the invoice)
اسم المطعم=>Restaurant name
رمز العملة=>Currency symbol
بادئة رقم الطلب=>Order number prefix
رسالة أسفل الفاتورة=>Invoice footer message
شعار المطعم=>Restaurant logo
إزالة الشعار=>Remove logo
الضريبة والخدمة=>Tax & service
تفعيل الضريبة (VAT)=>Enable tax (VAT)
نسبة الضريبة %=>Tax rate %
تفعيل رسوم الخدمة=>Enable service charge
نسبة الخدمة %=>Service rate %
مظهر النظام=>System accent
اللون الرئيسي=>Main color
النسخ الاحتياطي والبيانات=>Backup & data
تصدير نسخة احتياطية=>Export backup
استيراد نسخة=>Import backup
إعادة ضبط المصنع=>Factory reset
حفظ جميع الإعدادات=>Save all settings
تراجع=>Undo
عدد الطلبات المخزنة:=>Stored orders:
أصناف المنيو:=>Menu items:
الحسابات:=>Accounts:
تم حفظ الإعدادات=>Settings saved
اللغة والمظهر=>Language & appearance
لغة النظام=>System language
المظهر=>Theme
فاتح=>Light
داكن=>Dark
مع النظام=>Follow system
إفطار=>Breakfast
أطباق رئيسية=>Main courses
سندويتشات=>Sandwiches
سلطات وشوربة=>Salads & soups
بيتزا=>Pizza
مقبلات=>Starters
مشروبات باردة=>Cold drinks
مشروبات ساخنة=>Hot drinks
موكتيلات=>Mocktails
كوكتيلات=>Cocktails
حلويات=>Desserts
قائمة الأطفال=>Kids menu
إضافات=>Add-ons
ر.س=>SAR
السلة فارغة=>Cart is empty
أدخل اسماً=>Enter a name`.split('\n').map(function(l){return l.split('=>')}).filter(function(a){return a.length==2}).sort(function(a,b){return b[0].length-a[0].length});
var AR=/[\u0600-\u06FF]/,O=new WeakMap();
var ENX=DICT.map(function(a){return [new RegExp('(^|[^\\u0600-\\u06FF])'+a[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![\\u0600-\\u06FF])','g'),a[1]]});
var ENR=[[/(\d+) صنف/g,'$1 items'],[/خدمة \(([\d.]+)%\)/g,'Service ($1%)'],[/ضريبة \(([\d.]+)%\)/g,'Tax ($1%)'],[/خصم \((.*?)\)/g,'Discount ($1)'],[/السعر \((.*?)\) \*/g,'Price ($1) *'],[/أُضيف: /g,'Added: '],[/مرحباً بك، (.*?) 👋/g,'Welcome, $1 👋'],[/تم الدفع وإنشاء الطلب (.*?) ✅/g,'Payment done — order $1 created ✅'],[/هل تريد حذف الطلب (.*?) نهائياً؟/g,'Delete order $1 permanently?'],[/هل تريد حذف «(.*?)» من المنيو؟/g,'Delete “$1” from the menu?'],[/هل تريد حذف قسم «(.*?)»؟/g,'Delete the category “$1”?'],[/لا يمكن حذف قسم يحتوي على (\d+) صنف — انقلها أو احذفها أولاً/g,'Cannot delete a category with $1 items — move or delete them first'],[/ضريبة ([\d.]+)%/g,'tax $1%']];
function tr(s){if(!AR.test(s))return s;ENR.forEach(function(r){s=s.replace(r[0],r[1])});ENX.forEach(function(a){s=s.replace(a[0],function(m,p){return p+a[1]})});return s}
function tn(n){var p=n.parentNode&&n.parentNode.tagName;if(p=='SCRIPT'||p=='STYLE'||p=='TEXTAREA')return;var v=n.nodeValue;if(!AR.test(v))return;var t=tr(v);if(t!==v){if(!O.has(n))O.set(n,v);n.nodeValue=t}}
function attrs(root,back){if(!root.querySelectorAll)return;root.querySelectorAll('[placeholder],[title]').forEach(function(e){['placeholder','title'].forEach(function(a){var v=e.getAttribute(a);if(!v||!AR.test(v))return;var t=tr(v);if(t!==v){if(!e.hasAttribute('data-o-'+a))e.setAttribute('data-o-'+a,v);e.setAttribute(a,t)}})})}
function trIn(root){if(root.nodeType==3){tn(root);return}var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode())tn(n);attrs(root)}
function untr(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){if(O.has(n)){n.nodeValue=O.get(n);O.delete(n)}}document.querySelectorAll('[data-o-placeholder],[data-o-title]').forEach(function(e){['placeholder','title'].forEach(function(a){if(e.hasAttribute('data-o-'+a)){e.setAttribute(a,e.getAttribute('data-o-'+a));e.removeAttribute('data-o-'+a)}})})}
function lang(){return S&&S.settings&&S.settings.lang==='en'?'en':'ar'}
function theme(){return(S&&S.settings&&S.settings.theme)||'light'}
/* أسماء الأصناف بالإنجليزي أثناء العرض فقط (لا نغيّر البيانات المحفوظة) */
function hid(fn){return function(){if(lang()!='en')return fn.apply(this,arguments);var A=[],B=[];S.items.forEach(function(i){A.push([i,i.ar]);i.ar=''});S.orders.forEach(function(o){o.items.forEach(function(i){if(i.en){B.push([i,i.name]);i.name=i.en}})});try{return fn.apply(this,arguments)}finally{A.forEach(function(x){x[0].ar=x[1]});B.forEach(function(x){x[0].name=x[1]})}}}
['render','renderPOS','refreshPOSItems','refreshCart','renderMenu','renderMenuOnly','renderDashboard','renderOrders','addToCart','confirmPayment','openPayment','openReceiptModal','receiptHTML','printReceiptOrder','viewOrder'].forEach(function(n){if(typeof window[n]=='function')window[n]=hid(window[n])});
/* تواريخ بالإنجليزي */
['toLocaleDateString','toLocaleString','toLocaleTimeString'].forEach(function(m){var o=Date.prototype[m];Date.prototype[m]=function(l,x){return o.call(this,(lang()=='en'&&l=='ar-EG')?'en-US':l,x)}});
/* المظهر الداكن */
function dark(p){return p+'{--bg:#0b1220;--card:#162033;--line:#2a3850;--txt:#e5e7eb;--muted:#94a3b8;color-scheme:dark}'+[
'body{background:#0b1220}',
'.topbar,.stat,.p-item,.cart-card,.cat-tab,.cat-card,.modal,.pm-m,.search-inp,.sel,.login-card{background:#162033}',
'input,select,textarea,.field .inp,.field .inp:focus-within,.clock,.demo-box,.form-row input,.form-row select,.form-row textarea{background:#0f172a;color:#e5e7eb;border-color:#2a3850}',
'.btn-ghost,.tbtn,.qty-ctl button,.emoji-pick button,.modal-x,.cash-quick button,.img-upload .prev{background:#1f2c44;color:#cbd5e1}',
'.btn-ghost:hover,.modal-x:hover{background:#2a3850}',
'table.tbl td{border-bottom-color:#1f2c44}','table.tbl tr:hover td{background:#1b2740}',
'.cat-tab{color:#cbd5e1}.cat-tab.active{color:#fff}',
'.field label,.form-row label,.set-row label,.login-card h1,.modal-head h3,.demo-box b{color:#e2e8f0}',
'.badge-off{background:#1f2c44;color:#94a3b8}','.modal-ov{background:rgba(2,6,23,.7)}',
'[style*="#f8fafc"]{background:#0f172a!important}','[style*="#fffbeb"]{background:#2a2410!important;border-color:#5b4a14!important}',
'.pm-m.active{background:#2a2410}.tbtn.active{background:#2a1f10}.top-item .rank{background:#2a1f10}',
'.demo-box code{background:#1f2c44;color:#e5e7eb}','.search-inp input{color:#e5e7eb}','.receipt{color:#0f172a}'
].map(function(r){return r.split('}').filter(Boolean).map(function(x){var q=x.split('{');return q[0].split(',').map(function(s){return p+' '+s.trim()}).join(',')+'{'+q[1]+'}'}).join('')}).join('')}
var CSS=dark('html[data-theme=dark]')+'@media (prefers-color-scheme:dark){'+dark('html[data-theme=system]')+'}'
+'@media print{body{background:#fff!important;color:#000!important}}'
+'@media (max-width:820px){html[dir=ltr] .sidebar{transform:translateX(-100%)}html[dir=ltr] .sidebar.open{transform:none}}'
+'html[dir=rtl] .switch input:checked + .sl::before{transform:translateX(-20px)}html[lang=en] .p-item.out::after{content:"Unavailable"}';
var sty=document.createElement('style');sty.id='lt-style';sty.textContent=CSS;document.head.appendChild(sty);
function apply(){var h=document.documentElement,en=lang()=='en';h.setAttribute('data-theme',theme());h.lang=en?'en':'ar';h.dir=en?'ltr':'rtl';document.title=en?'POS System — Al-Aseel Restaurant':'نظام نقاط البيع — مطعم الأصيل';if(en)trIn(document.body);else untr()}
function card(){var l=lang(),t=theme();return '<div class="card set-group"><h3>🌐 اللغة والمظهر</h3><div class="set-row"><label>لغة النظام</label><select onchange="LT.set(\'lang\',this.value)"><option value="ar"'+(l=='ar'?' selected':'')+'>العربية</option><option value="en"'+(l=='en'?' selected':'')+'>English</option></select></div><div class="set-row"><label>المظهر</label><select onchange="LT.set(\'theme\',this.value)"><option value="light"'+(t=='light'?' selected':'')+'>فاتح</option><option value="dark"'+(t=='dark'?' selected':'')+'>داكن</option><option value="system"'+(t=='system'?' selected':'')+'>مع النظام</option></select></div></div>'}
var rs=window.renderSettings;window.renderSettings=function(root){rs.apply(this,arguments);var g=root.querySelector('.settings-grid');if(g)g.insertAdjacentHTML('afterbegin',card())};
window.LT={set:function(k,v){S.settings[k]=v;save();apply();if(S.session)render()}};
new MutationObserver(function(ms){if(lang()!='en')return;ms.forEach(function(m){if(m.type=='characterData')tn(m.target);else m.addedNodes.forEach(function(n){if(n.nodeType==3)tn(n);else if(n.nodeType==1)trIn(n)})})}).observe(document.body,{childList:true,subtree:true,characterData:true});
apply();if(S.session)render();
})();
