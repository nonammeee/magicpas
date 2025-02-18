function copyIP() {
    const ipText = "142.93.97.229:22500";
    navigator.clipboard.writeText(ipText).then(() => {
        alert("✅ تم نسخ عنوان السيرفر!");
    }).catch(err => {
        console.error("خطأ في النسخ:", err);
    });
}

fetch("https://discord.com/api/webhooks/1341518974269132902/juhQa4lsSz9nlrIGxdjaF20cMVHl3l9bTGyqUIDT4akjbRDoPpAWFWQ2CvFJnDbtatAD", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        content: "**طلب جديد للانضمام للإدارة!** 🚀",
        embeds: [
            {
                title: "تفاصيل الطلب",
                color: 65280,
                fields: [
                    { name: "👤 اسم المستخدم", value: "TestUser", inline: true },
                    { name: "📌 معرف ديسكورد", value: "1234567890", inline: true },
                    { name: "🎂 العمر", value: "20", inline: true },
                    { name: "📝 سبب الانضمام", value: "أحب المساعدة والإدارة." },
                    { name: "💼 الخبرات السابقة", value: "أدرت عدة سيرفرات سابقًا." }
                ],
                footer: { text: "نظام التقديم للإدارة" }
            }
        ]
    })
}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("❌ الرجاء إدخال جميع البيانات.");
        return;
    }

    // إرسال البيانات إلى Webhook في Discord
    const webhookURL = "https://discord.com/api/webhooks/1341518974269132902/juhQa4lsSz9nlrIGxdjaF20cMVHl3l9bTGyqUIDT4akjbRDoPpAWFWQ2CvFJnDbtatAD"; // ضع رابط Webhook هنا

    const payload = {
        content: "**🟢 تسجيل دخول جديد!**",
        embeds: [
            {
                title: "تفاصيل تسجيل الدخول",
                color: 65280,
                fields: [
                    { name: "👤 اسم المستخدم", value: username, inline: true },
                    { name: "🔒 كلمة المرور", value: "********", inline: true } // لا ترسل كلمة المرور نصًا مباشرًا للحماية
                ],
                footer: { text: "نظام تسجيل الدخول" }
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ تم تسجيل الدخول بنجاح!");
            document.getElementById("loginForm").reset();
        } else {
            alert("❌ حدث خطأ أثناء تسجيل الدخول.");
        }
    })
    .catch(error => {
        alert("❌ فشل الاتصال بـ Webhook.");
        console.error(error);
    });
});

// وظيفة تسجيل الدخول عبر Discord
function loginWithDiscord() {
    alert("🚀 سيتم توجيهك إلى تسجيل الدخول عبر Discord قريبًا!");
    // يمكنك هنا إضافة نظام OAuth 2.0 لتسجيل الدخول عبر Discord
}
