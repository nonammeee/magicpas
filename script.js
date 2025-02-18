function copyIP() {
    const ipText = "142.93.97.229:22500";
    navigator.clipboard.writeText(ipText).then(() => {
        alert("✅ تم نسخ عنوان السيرفر!");
    }).catch(err => {
        console.error("خطأ في النسخ:", err);
    });
}

document.getElementById("adminForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // الحصول على القيم المدخلة
    const username = document.getElementById("username").value;
    const discordId = document.getElementById("discordId").value;
    const age = document.getElementById("age").value;
    const reason = document.getElementById("reason").value;
    const experience = document.getElementById("experience").value;

    // رابط Webhook الخاص بـ Discord (ضع الرابط هنا)
    const webhookURL = "https://discord.com/api/webhooks/1341510572868505672/svGdyk3TSMv9pKjTm6JOaSNENsR5_M73S8n_boruUhukvoz0C9wdXlA_oa-n8T9pFybf";

    // إنشاء رسالة مرسلة إلى الديسكورد بتنسيق JSON
    const payload = {
        content: "**طلب جديد للانضمام للإدارة!** 🚀",
        embeds: [
            {
                title: "تفاصيل الطلب",
                color: 65280, // اللون الأخضر
                fields: [
                    { name: "👤 اسم المستخدم", value: username, inline: true },
                    { name: "📌 معرف ديسكورد", value: discordId, inline: true },
                    { name: "🎂 العمر", value: age, inline: true },
                    { name: "📝 سبب الانضمام", value: reason },
                    { name: "💼 الخبرات السابقة", value: experience }
                ],
                footer: { text: "نظام التقديم للإدارة" }
            }
        ]
    };

    // إرسال الطلب إلى Webhook
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ تم إرسال الطلب بنجاح!");
            document.getElementById("adminForm").reset();
        } else {
            alert("❌ حدث خطأ أثناء الإرسال!");
        }
    })
    .catch(error => {
        alert("❌ فشل الاتصال بـ Webhook. تأكد من صحة الرابط.");
        console.error(error);
    });
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("❌ الرجاء إدخال جميع البيانات.");
        return;
    }

    // إرسال البيانات إلى Webhook في Discord
    const webhookURL = "https://discord.com/api/webhooks/1341510572868505672/svGdyk3TSMv9pKjTm6JOaSNENsR5_M73S8n_boruUhukvoz0C9wdXlA_oa-n8T9pFybf"; // ضع رابط Webhook هنا

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
