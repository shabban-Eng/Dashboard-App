// القواميس الشاملة للغتين (تم إضافة ترجمات العملات)
const translations = {
  ar: {
    appName: "مَصروفِي",
    home: "الرئيسية",
    reports: "التقارير والتحليل",
    settings: "الإعدادات",
    welcome: "مرحباً بك، ",
    txCount: "عدد المعاملات",
    totalBalance: "إجمالي الرصيد",
    totalIncome: "إجمالي الدخل",
    totalExpense: "إجمالي المصاريف",
    addTransactionTitle: "إضافة معاملة جديدة",
    editTransactionTitle: "تعديل المعاملة المالية",
    description: "الوصف",
    amount: "المبلغ",
    type: "النوع",
    category: "التصنيف",
    date: "التاريخ",
    add: "إضافة",
    update: "تحديث المعاملة",
    cancel: "إلغاء",
    expense: "مصروف (-)",
    income: "دخل (+)",
    expenseOpt: "مصروف",
    incomeOpt: "دخل",
    historyTitle: "سجل المعاملات",
    filterAll: "الكل",
    sortNewest: "الأحدث",
    sortOldest: "الأقدم",
    sortHighest: "الأعلى مبلغاً",
    sortLowest: "الأقل مبلغاً",
    thDesc: "الوصف",
    thCategory: "التصنيف",
    thDate: "التاريخ",
    thAmount: "المبلغ",
    thType: "النوع",
    thActions: "إجراءات",
    chartTitle: "المصاريف حسب التصنيف",
    salaryAnalysisTitle: "تحليل الراتب والميزانية الشهرية",
    monthlySalaryLabel: "الراتب الشهري المُحدد",
    spentFromSalaryLabel: "نسبة المصاريف من الراتب",
    detailedExpenseAnalysis: "تحليل تفصيلي للمصاريف حسب الفئات",
    reportsSummary: "تصدير واستيراد البيانات (نسخة احتياطية JSON)",
    reportsDesc:
      "يمكنك حفظ نسخة احتياطية آمنة لكافة معاملاتك واستعادتها في أي وقت، أو مسح البيانات نهائياً.",
    exportJSON: "تصدير النسخة الاحتياطية",
    importJSON: "استيراد النسخة الاحتياطية",
    clearData: "مسح كافة البيانات",
    settingsTitle: "إعدادات التطبيق",
    userName: "اسم المستخدم",
    monthlySalaryInput: "الراتب الشهري",
    currency: "العملة",
    language: "اللغة",
    saveSettings: "حفظ الإعدادات",
    savedSuccess: "تم حفظ الإعدادات بنجاح!",
    descPlaceholder: "وصف المعاملة...",
    searchPlaceholder: "بحث بالوصف...",
    edit: "تعديل",
    delete: "حذف",
    currUSD: "دولار أمريكي ($)",
    currEUR: "يورو (€)",
    currILS: "شيكل (₪)",
    currEGP: "جنيه مصري (EGP)",
    currSAR: "ريال سعودي (SAR)",
  },
  en: {
    appName: "Masroufi",
    home: "Home",
    reports: "Reports & Analysis",
    settings: "Settings",
    welcome: "Welcome, ",
    txCount: "Transactions",
    totalBalance: "Total Balance",
    totalIncome: "Total Income",
    totalExpense: "Total Expense",
    addTransactionTitle: "Add New Transaction",
    editTransactionTitle: "Edit Transaction",
    description: "Description",
    amount: "Amount",
    type: "Type",
    category: "Category",
    date: "Date",
    add: "Add",
    update: "Update Transaction",
    cancel: "Cancel",
    expense: "Expense (-)",
    income: "Income (+)",
    expenseOpt: "Expense",
    incomeOpt: "Income",
    historyTitle: "Transaction History",
    filterAll: "All",
    sortNewest: "Newest",
    sortOldest: "Oldest",
    sortHighest: "Highest Amount",
    sortLowest: "Lowest Amount",
    thDesc: "Description",
    thCategory: "Category",
    thDate: "Date",
    thAmount: "Amount",
    thType: "Type",
    thActions: "Actions",
    chartTitle: "Expenses by Category",
    salaryAnalysisTitle: "Salary & Monthly Budget Analysis",
    monthlySalaryLabel: "Specified Monthly Salary",
    spentFromSalaryLabel: "Expenses Ratio from Salary",
    detailedExpenseAnalysis: "Detailed Expense Breakdown by Category",
    reportsSummary: "Export & Backup Data (JSON)",
    reportsDesc:
      "Export a safe backup of all your transactions and restore them anytime, or clear data.",
    exportJSON: "Export Backup",
    importJSON: "Import Backup",
    clearData: "Clear All Data",
    settingsTitle: "App Settings",
    userName: "User Name",
    monthlySalaryInput: "Monthly Salary",
    currency: "Currency",
    language: "Language",
    saveSettings: "Save Settings",
    savedSuccess: "Settings saved successfully!",
    descPlaceholder: "Transaction description...",
    searchPlaceholder: "Search by description...",
    edit: "Edit",
    delete: "Delete",
    currUSD: "US Dollar ($)",
    currEUR: "Euro (€)",
    currILS: "Shekel (₪)",
    currEGP: "Egyptian Pound (EGP)",
    currSAR: "Saudi Riyal (SAR)",
  },
};

// التصنيفات مع تخصيص لون مميز لكل تصنيف مصروف
const categoriesConfig = {
  expense: [
    {
      key: "food",
      ar: "طعام وشرب",
      en: "Food & Drinks",
      icon: "fa-utensils",
      color: "#f59e0b",
    },
    {
      key: "shopping",
      ar: "تسوق",
      en: "Shopping",
      icon: "fa-bag-shopping",
      color: "#ec4899",
    },
    {
      key: "transport",
      ar: "مواصلات",
      en: "Transport",
      icon: "fa-car",
      color: "#3b82f6",
    },
    {
      key: "bills",
      ar: "فواتير خدمات",
      en: "Utilities & Bills",
      icon: "fa-file-invoice-dollar",
      color: "#ef4444",
    },
    {
      key: "entertainment",
      ar: "ترفيه",
      en: "Entertainment",
      icon: "fa-gamepad",
      color: "#8b5cf6",
    },
    {
      key: "other",
      ar: "أخرى",
      en: "Other",
      icon: "fa-ellipsis",
      color: "#64748b",
    },
  ],
  income: [
    {
      key: "salary",
      ar: "راتب",
      en: "Salary",
      icon: "fa-money-bill-wave",
      color: "#10b981",
    },
    {
      key: "freelance",
      ar: "عمل حر",
      en: "Freelance",
      icon: "fa-laptop-code",
      color: "#06b6d4",
    },
    { key: "gift", ar: "هدية", en: "Gift", icon: "fa-gift", color: "#f43f5e" },
    {
      key: "investment",
      ar: "استثمار",
      en: "Investment",
      icon: "fa-chart-line",
      color: "#84cc16",
    },
    {
      key: "other_inc",
      ar: "أخرى",
      en: "Other",
      icon: "fa-coins",
      color: "#64748b",
    },
  ],
};

// حالة التطبيق مع مفتاح فرعي خاص بشعبان
let appSettings = JSON.parse(
  localStorage.getItem("masroufi_shabban_settings"),
) || {
  userName: "شعبان",
  monthlySalary: 1000,
  currency: "₪",
  lang: "ar",
  theme: "dark",
};

let transactions = JSON.parse(
  localStorage.getItem("masroufi_shabban_transactions"),
) || [
  {
    desc: "ملوخية",
    amount: 160,
    type: "expense",
    categoryKey: "food",
    date: "2026-09-22",
  },
  {
    desc: "نت",
    amount: 60,
    type: "expense",
    categoryKey: "bills",
    date: "2026-09-22",
  },
  {
    desc: "قهوة",
    amount: 10,
    type: "expense",
    categoryKey: "food",
    date: "2026-09-22",
  },
];

transactions.forEach((t) => {
  if (!t.categoryKey) {
    let foundKey = "other";
    ["expense", "income"].forEach((type) => {
      categoriesConfig[type].forEach((cat) => {
        if (cat.ar === t.category || cat.en === t.category) {
          t.categoryKey = cat.key;
        }
      });
    });
    if (!t.categoryKey) t.categoryKey = "other";
    delete t.category;
  }
});

const body = document.body;
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const dateInput = document.getElementById("dateInput");
const typeInput = document.getElementById("typeInput");
const categoryInput = document.getElementById("categoryInput");

if (dateInput) {
  dateInput.value = new Date().toISOString().split("T")[0];
}

// إعداد الرسم البياني Chart.js
let myChart = null;
const ctxElement = document.getElementById("myChart");
if (ctxElement) {
  const ctx = ctxElement.getContext("2d");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Amount",
          data: [],
          backgroundColor: [],
          borderRadius: 6,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { color: "rgba(255,255,255,0.05)" },
          ticks: { color: "#9ca3af" },
        },
        y: {
          grid: { display: false },
          ticks: { color: "#9ca3af" },
        },
      },
    },
  });
}

// التبديل بين التبويبات
window.switchTab = function (tabName) {
  document
    .querySelectorAll(".tab-page")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".menu li")
    .forEach((el) => el.classList.remove("active"));

  if (tabName === "home") {
    document.getElementById("tabHome").style.display = "block";
    const nav = document.getElementById("navHome");
    if (nav) nav.classList.add("active");
  } else if (tabName === "reports") {
    document.getElementById("tabReports").style.display = "block";
    const nav = document.getElementById("navReports");
    if (nav) nav.classList.add("active");
    updateReportsAnalytics();
  } else if (tabName === "settings") {
    document.getElementById("tabSettings").style.display = "block";
    const nav = document.getElementById("navSettings");
    if (nav) nav.classList.add("active");
  }
};

window.updateCategoryOptions = function () {
  if (!typeInput || !categoryInput) return;
  const type = typeInput.value;
  const lang = appSettings.lang;
  const options = categoriesConfig[type];
  categoryInput.innerHTML = "";
  options.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.key;
    opt.textContent = lang === "ar" ? c.ar : c.en;
    categoryInput.appendChild(opt);
  });
};

function applySettings() {
  body.setAttribute("data-theme", appSettings.theme);
  if (themeIcon) {
    themeIcon.className =
      appSettings.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  const lang = appSettings.lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  const welcomeEl = document.getElementById("welcomeText");
  if (welcomeEl) welcomeEl.textContent = t.welcome + appSettings.userName;

  const setUserName = document.getElementById("settingUserName");
  if (setUserName) setUserName.value = appSettings.userName;

  const setSalary = document.getElementById("settingSalary");
  if (setSalary) setSalary.value = appSettings.monthlySalary;

  const quickSalary = document.getElementById("quickSalaryInput");
  if (quickSalary) quickSalary.value = appSettings.monthlySalary;

  const setCurr = document.getElementById("settingCurrency");
  if (setCurr) setCurr.value = appSettings.currency;

  const setLang = document.getElementById("settingLang");
  if (setLang) setLang.value = appSettings.lang;

  updateCategoryOptions();
  updateDashboard();
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    appSettings.theme = appSettings.theme === "dark" ? "light" : "dark";
    localStorage.setItem(
      "masroufi_shabban_settings",
      JSON.stringify(appSettings),
    );
    applySettings();
  });
}

window.updateSalaryDirectly = function (val) {
  appSettings.monthlySalary = parseFloat(val) || 0;
  localStorage.setItem(
    "masroufi_shabban_settings",
    JSON.stringify(appSettings),
  );
  const setSalary = document.getElementById("settingSalary");
  if (setSalary) setSalary.value = appSettings.monthlySalary;
  updateReportsAnalytics();
};

function getCategoryDetails(type, key) {
  const lang = appSettings.lang;
  const list = categoriesConfig[type] || categoriesConfig["expense"];
  const found = list.find((c) => c.key === key) || list[0];
  return {
    name: lang === "ar" ? found.ar : found.en,
    icon: found.icon,
    color: found.color,
  };
}

window.updateDashboard = function () {
  const transactionList = document.getElementById("transactionList");
  if (!transactionList) return;
  transactionList.innerHTML = "";

  let incomeSum = 0;
  let expenseSum = 0;
  let expenseCategoryTotals = {};

  const searchInput = document.getElementById("searchInput");
  const filterType = document.getElementById("filterType");
  const sortBy = document.getElementById("sortBy");

  const search = searchInput ? searchInput.value.toLowerCase() : "";
  const filter = filterType ? filterType.value : "all";
  const sort = sortBy ? sortBy.value : "newest";

  let filtered = transactions.filter((t) => {
    const catDetails = getCategoryDetails(t.type, t.categoryKey);
    const matchSearch =
      t.desc.toLowerCase().includes(search) ||
      catDetails.name.toLowerCase().includes(search);
    const matchType = filter === "all" || t.type === filter;
    return matchSearch && matchType;
  });

  filtered.sort((a, b) => {
    if (sort === "newest") return new Date(b.date) - new Date(a.date);
    if (sort === "oldest") return new Date(a.date) - new Date(b.date);
    if (sort === "highest") return b.amount - a.amount;
    if (sort === "lowest") return a.amount - b.amount;
  });

  transactions.forEach((t) => {
    const amt = parseFloat(t.amount);
    const catDetails = getCategoryDetails(t.type, t.categoryKey);
    if (t.type === "income") {
      incomeSum += amt;
    } else {
      expenseSum += amt;
      if (!expenseCategoryTotals[catDetails.name]) {
        expenseCategoryTotals[catDetails.name] = 0;
      }
      expenseCategoryTotals[catDetails.name] += amt;
    }
  });

  filtered.forEach((item) => {
    const realIndex = transactions.indexOf(item);
    const tr = document.createElement("tr");

    const catDetails = getCategoryDetails(item.type, item.categoryKey);
    const lang = appSettings.lang;

    const isIncome = item.type === "income";
    const sign = isIncome ? "+" : "-";
    const colorClass = isIncome ? "text-green" : "text-red";
    const badgeClass = isIncome ? "badge-income" : "badge-expense";
    const formattedDate = formatDateString(item.date);
    const typeLabel = isIncome
      ? translations[lang].incomeOpt
      : translations[lang].expenseOpt;

    tr.innerHTML = `
            <td><strong>${item.desc}</strong></td>
            <td><span class="category-tag"><i class="fa-solid ${catDetails.icon}" style="color: ${catDetails.color};"></i> ${catDetails.name}</span></td>
            <td class="date-cell">${formattedDate}</td>
            <td class="${colorClass}">${sign}${appSettings.currency}${item.amount.toFixed(2)}</td>
            <td><span class="badge ${badgeClass}">${typeLabel}</span></td>
            <td>
                <button type="button" class="action-btn" title="${translations[lang].edit}" onclick="editTransaction(${realIndex})"><i class="fa-solid fa-pen"></i></button>
                <button type="button" class="action-btn text-red" title="${translations[lang].delete}" onclick="deleteTransaction(${realIndex})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
    transactionList.appendChild(tr);
  });

  const txCountVal = document.getElementById("txCountVal");
  const totalBalanceVal = document.getElementById("totalBalanceVal");
  const totalIncomeVal = document.getElementById("totalIncomeVal");
  const totalExpenseVal = document.getElementById("totalExpenseVal");

  if (txCountVal) txCountVal.textContent = transactions.length;
  if (totalBalanceVal)
    totalBalanceVal.textContent = `${appSettings.currency}${(incomeSum - expenseSum).toFixed(2)}`;
  if (totalIncomeVal)
    totalIncomeVal.textContent = `+${appSettings.currency}${incomeSum.toFixed(2)}`;
  if (totalExpenseVal)
    totalExpenseVal.textContent = `-${appSettings.currency}${expenseSum.toFixed(2)}`;

  if (myChart) {
    const catNames = Object.keys(expenseCategoryTotals);
    const catAmounts = Object.values(expenseCategoryTotals);

    const colors = catNames.map((name) => {
      const found = categoriesConfig["expense"].find(
        (c) => c.ar === name || c.en === name,
      );
      return found ? found.color : "#6366f1";
    });

    myChart.data.labels = catNames;
    myChart.data.datasets[0].data = catAmounts;
    myChart.data.datasets[0].backgroundColor = colors;
    myChart.update();
  }

  localStorage.setItem(
    "masroufi_shabban_transactions",
    JSON.stringify(transactions),
  );
};

function updateReportsAnalytics() {
  let totalExpense = 0;
  let expenseCategoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const amt = parseFloat(t.amount);
      totalExpense += amt;
      const catDetails = getCategoryDetails(t.type, t.categoryKey);
      expenseCategoryTotals[catDetails.name] = {
        amount: (expenseCategoryTotals[catDetails.name]?.amount || 0) + amt,
        icon: catDetails.icon,
        color: catDetails.color,
      };
    }
  });

  const salary = parseFloat(appSettings.monthlySalary) || 0;
  const reportSpentRatioVal = document.getElementById("reportSpentRatioVal");

  let spentRatio = salary > 0 ? (totalExpense / salary) * 100 : 0;
  if (reportSpentRatioVal)
    reportSpentRatioVal.textContent = `${spentRatio.toFixed(1)}%`;

  const quickSalary = document.getElementById("quickSalaryInput");
  if (quickSalary && quickSalary.value != salary) quickSalary.value = salary;

  const breakdownContainer = document.getElementById(
    "expenseBreakdownContainer",
  );
  if (breakdownContainer) {
    breakdownContainer.innerHTML = "";
    if (Object.keys(expenseCategoryTotals).length === 0) {
      breakdownContainer.innerHTML = `<p style="color: var(--text-muted);">${appSettings.lang === "ar" ? "لا توجد مصاريف مسجلة للتحليل بعد." : "No expenses recorded for analysis yet."}</p>`;
      return;
    }

    for (const [catName, data] of Object.entries(expenseCategoryTotals)) {
      const percentage =
        totalExpense > 0 ? (data.amount / totalExpense) * 100 : 0;

      const itemEl = document.createElement("div");
      itemEl.className = "breakdown-item";
      itemEl.innerHTML = `
                <div class="breakdown-info">
                    <span><i class="fa-solid ${data.icon}" style="color: ${data.color};"></i> ${catName}</span>
                    <span><strong>${appSettings.currency}${data.amount.toFixed(2)}</strong> (${percentage.toFixed(1)}%)</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${percentage}%; background-color: ${data.color};"></div>
                </div>
            `;
      breakdownContainer.appendChild(itemEl);
    }
  }
}

function formatDateString(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const lang = appSettings.lang;
  if (lang === "en") {
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const transactionForm = document.getElementById("transactionForm");
if (transactionForm) {
  transactionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editIndexInput = document.getElementById("editIndex");
    const descInput = document.getElementById("descInput");
    const amountInput = document.getElementById("amountInput");
    const typeInputEl = document.getElementById("typeInput");
    const categoryInputEl = document.getElementById("categoryInput");
    const dateInputEl = document.getElementById("dateInput");

    if (
      !editIndexInput ||
      !descInput ||
      !amountInput ||
      !typeInputEl ||
      !categoryInputEl ||
      !dateInputEl
    )
      return;

    const editIdx = parseInt(editIndexInput.value);
    const newTx = {
      desc: descInput.value,
      amount: parseFloat(amountInput.value),
      type: typeInputEl.value,
      categoryKey: categoryInputEl.value,
      date: dateInputEl.value,
    };

    if (editIdx === -1) {
      transactions.unshift(newTx);
    } else {
      transactions[editIdx] = newTx;
    }

    window.resetForm();
    window.updateDashboard();
  });
}

window.editTransaction = function (index) {
  const item = transactions[index];
  const editIndexInput = document.getElementById("editIndex");
  const descInput = document.getElementById("descInput");
  const amountInput = document.getElementById("amountInput");
  const typeInputEl = document.getElementById("typeInput");
  const categoryInputEl = document.getElementById("categoryInput");
  const dateInputEl = document.getElementById("dateInput");
  const submitBtn = document.getElementById("submitBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  if (
    !editIndexInput ||
    !descInput ||
    !amountInput ||
    !typeInputEl ||
    !categoryInputEl ||
    !dateInputEl
  )
    return;

  editIndexInput.value = index;
  descInput.value = item.desc;
  amountInput.value = item.amount;
  typeInputEl.value = item.type;
  window.updateCategoryOptions();
  categoryInputEl.value = item.categoryKey;
  dateInputEl.value = item.date;

  const t = translations[appSettings.lang];
  if (submitBtn) submitBtn.textContent = t.update;
  if (cancelEditBtn) cancelEditBtn.style.display = "inline-block";

  const mainContainer = document.querySelector(".main-content");
  if (mainContainer) {
    mainContainer.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

window.resetForm = function () {
  const editIndexInput = document.getElementById("editIndex");
  const transactionFormEl = document.getElementById("transactionForm");
  const submitBtn = document.getElementById("submitBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  if (editIndexInput) editIndexInput.value = "-1";
  if (transactionFormEl) transactionFormEl.reset();
  if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];
  window.updateCategoryOptions();

  const t = translations[appSettings.lang];
  if (submitBtn) submitBtn.textContent = t.add;
  if (cancelEditBtn) cancelEditBtn.style.display = "none";
};

window.deleteTransaction = function (index) {
  const lang = appSettings.lang;
  const msg =
    lang === "ar"
      ? "هل أنت متأكد من حذف هذه المعاملة؟"
      : "Are you sure you want to delete this transaction?";
  if (confirm(msg)) {
    transactions.splice(index, 1);
    window.updateDashboard();
  }
};

window.saveSettings = function () {
  const setUserName = document.getElementById("settingUserName");
  const setSalary = document.getElementById("settingSalary");
  const setCurr = document.getElementById("settingCurrency");
  const setLang = document.getElementById("settingLang");

  if (setUserName) appSettings.userName = setUserName.value;
  if (setSalary) appSettings.monthlySalary = parseFloat(setSalary.value) || 0;
  if (setCurr) appSettings.currency = setCurr.value;
  if (setLang) appSettings.lang = setLang.value;

  localStorage.setItem(
    "masroufi_shabban_settings",
    JSON.stringify(appSettings),
  );
  applySettings();
  alert(translations[appSettings.lang].savedSuccess);
};

window.exportJSON = function () {
  if (transactions.length === 0)
    return alert(
      appSettings.lang === "ar"
        ? "لا توجد بيانات للتصدير!"
        : "No data to export!",
    );
  const backupData = {
    settings: appSettings,
    transactions: transactions,
    exportDate: new Date().toISOString(),
  };
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(backupData, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "masroufi_backup.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

window.importJSON = function (event) {
  const fileReader = new FileReader();
  if (event.target.files[0]) {
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.transactions && Array.isArray(parsed.transactions)) {
          transactions = parsed.transactions;
          if (parsed.settings) {
            appSettings = parsed.settings;
            localStorage.setItem(
              "masroufi_shabban_settings",
              JSON.stringify(appSettings),
            );
          }
          applySettings();
          alert(
            appSettings.lang === "ar"
              ? "تم استعادة البيانات بنجاح!"
              : "Data successfully imported!",
          );
        } else {
          alert(
            appSettings.lang === "ar"
              ? "ملف النسخة الاحتياطية غير صالح!"
              : "Invalid backup file!",
          );
        }
      } catch (error) {
        alert(
          appSettings.lang === "ar"
            ? "حدث خطأ أثناء قراءة الملف!"
            : "Error reading file!",
        );
      }
    };
  }
};

window.clearAllData = function () {
  const msg =
    appSettings.lang === "ar"
      ? "تحذير: سيتم حذف كافة البيانات المسجلة بالكامل!"
      : "Warning: All recorded data will be permanently deleted!";
  if (confirm(msg)) {
    transactions = [];
    window.updateDashboard();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  applySettings();
});
