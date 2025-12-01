document.addEventListener('DOMContentLoaded', function () {
    // Translations
    const translations = {
        zh: {
            nav_features: "功能特性",
            nav_pricing: "价格方案",
            nav_contact: "联系我们",
            nav_download: "下载试用",
            hero_title: '精准捕捉每一个动作<br><span class="gradient-text">释放运动潜能</span>',
            hero_subtitle: "GPose v1.0 结合 AI 姿态识别与多视角融合技术，为击剑与传统武术提供专业级运动分析。",
            hero_buy: "立即购买",
            hero_learn_more: "了解更多",
            hero_demo_caption: "GPose 界面演示",
            features_title: "核心功能",
            feature_1_title: "AI 智能识别",
            feature_1_desc: "自动识别击剑、太极拳等运动类型，支持 OpenPose 与 MediaPipe 双引擎，精准捕捉 33 个关键点。",
            feature_2_title: "多视角融合",
            feature_2_desc: "支持 2-4 个视角同步分析，通过独创融合算法提升 10-15% 的空间定位精度。",
            feature_3_title: "专业数据分析",
            feature_3_desc: "提供关节角度、角速度、重心轨迹等专业指标，支持 CSV、JSON 及 PDF 报告导出。",
            feature_4_title: "高性能体验",
            feature_4_desc: "优化的批处理与内存管理，支持实时分析，Apple 风格 UI 带来流畅的交互体验。",
            pricing_title: "选择您的方案",
            pricing_subtitle: "灵活的定价，满足个人与团队的需求",
            pricing_users_label: "用户数量",
            pricing_monthly: "月付",
            pricing_yearly: "年付",
            pricing_discount: "-20%",
            plan_personal_title: "个人版",
            plan_personal_desc: "适合个人教练与运动员",
            plan_personal_feat_1: "单人姿态分析",
            plan_personal_feat_2: "基础数据导出 (CSV)",
            plan_personal_feat_3: "4k 视频支持",
            plan_personal_feat_4: "社区支持",
            btn_select_plan: "选择方案",
            plan_pro_title: "专业版",
            plan_pro_desc: "适合专业俱乐部与科研机构",
            plan_pro_feat_1: "多人姿态分析",
            plan_pro_feat_2: "全格式导出 (PDF/JSON)",
            plan_pro_feat_3: "4K 视频支持",
            plan_pro_feat_4: "多视角融合功能",
            plan_pro_feat_5: "优先技术支持",
            plan_enterprise_title: "企业版",
            plan_enterprise_desc: "适合大型体育院校与国家队",
            plan_enterprise_feat_1: "无限用户授权",
            plan_enterprise_feat_2: "定制化功能开发",
            plan_enterprise_feat_3: "私有化部署",
            plan_enterprise_feat_4: "专属客户经理",
            plan_enterprise_feat_5: "API 接口访问",
            btn_contact_sales: "联系销售",
            total_price_label: "预计总价",
            footer_slogan: "重新定义运动分析",
            footer_product: "产品",
            footer_features: "功能",
            footer_download: "下载",
            footer_changelog: "更新日志",
            footer_resources: "资源",
            footer_docs: "使用文档",
            footer_api: "API 文档",
            footer_community: "社区",
            footer_company: "公司",
            footer_about: "关于我们",
            footer_contact: "联系方式",
            footer_privacy: "隐私政策",
            unit_month: "/月",
            unit_year: "/年",
            btn_selected: "已选择"
        },
        en: {
            nav_features: "Features",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            nav_download: "Download",
            hero_title: 'Capture Every Move<br><span class="gradient-text">Unleash Potential</span>',
            hero_subtitle: "GPose v1.0 combines AI pose estimation with multi-view fusion to provide professional motion analysis for fencing and martial arts.",
            hero_buy: "Buy Now",
            hero_learn_more: "Learn More",
            hero_demo_caption: "GPose Interface Demo",
            features_title: "Core Features",
            feature_1_title: "AI Recognition",
            feature_1_desc: "Auto-detects fencing, Tai Chi, etc. Supports OpenPose & MediaPipe engines, capturing 33 key points precisely.",
            feature_2_title: "Multi-View Fusion",
            feature_2_desc: "Supports 2-4 view sync analysis. Exclusive fusion algorithm improves spatial accuracy by 10-15%.",
            feature_3_title: "Pro Data Analysis",
            feature_3_desc: "Provides joint angles, angular velocity, COG trajectories, etc. Supports CSV, JSON, and PDF export.",
            feature_4_title: "High Performance",
            feature_4_desc: "Optimized batch processing & memory management. Supports real-time analysis with smooth Apple-style UI.",
            pricing_title: "Choose Your Plan",
            pricing_subtitle: "Flexible pricing for individuals and teams",
            pricing_users_label: "Users",
            pricing_monthly: "Monthly",
            pricing_yearly: "Yearly",
            pricing_discount: "-20%",
            plan_personal_title: "Personal",
            plan_personal_desc: "For individual coaches & athletes",
            plan_personal_feat_1: "Single-person pose analysis",
            plan_personal_feat_2: "Basic data export (CSV)",
            plan_personal_feat_3: "4K video support",
            plan_personal_feat_4: "Community support",
            btn_select_plan: "Select Plan",
            plan_pro_title: "Pro",
            plan_pro_desc: "For clubs & research institutes",
            plan_pro_feat_1: "Multi-person pose analysis",
            plan_pro_feat_2: "Full export (PDF/JSON)",
            plan_pro_feat_3: "4K video support",
            plan_pro_feat_4: "Multi-view fusion",
            plan_pro_feat_5: "Priority support",
            plan_enterprise_title: "Enterprise",
            plan_enterprise_desc: "For sports colleges & national teams",
            plan_enterprise_feat_1: "Unlimited users",
            plan_enterprise_feat_2: "Custom feature dev",
            plan_enterprise_feat_3: "Private deployment",
            plan_enterprise_feat_4: "Dedicated manager",
            plan_enterprise_feat_5: "API access",
            btn_contact_sales: "Contact Sales",
            total_price_label: "Est. Total",
            footer_slogan: "Redefining Motion Analysis",
            footer_product: "Product",
            footer_features: "Features",
            footer_download: "Download",
            footer_changelog: "Changelog",
            footer_resources: "Resources",
            footer_docs: "Documentation",
            footer_api: "API Docs",
            footer_community: "Community",
            footer_company: "Company",
            footer_about: "About Us",
            footer_contact: "Contact",
            footer_privacy: "Privacy Policy",
            unit_month: "/mo",
            unit_year: "/yr",
            btn_selected: "Selected"
        }
    };

    let currentLang = 'zh';
    const langToggleBtn = document.getElementById('lang-toggle');

    // Pricing Data
    const basePrices = {
        personal: 99,
        pro: 299,
        enterprise: 999
    };

    const yearlyDiscount = 0.2; // 20% discount

    // Elements
    const userCountInput = document.getElementById('user-count');
    const userCountDisplay = document.getElementById('user-count-display');
    const billingToggle = document.getElementById('billing-cycle');
    const personalPriceDisplay = document.getElementById('personal-price');
    const proPriceDisplay = document.getElementById('pro-price');
    const enterprisePriceDisplay = document.getElementById('enterprise-price');
    const totalPriceDisplay = document.getElementById('total-price');
    const billingTextDisplay = document.getElementById('billing-text');

    // State
    let state = {
        users: 1,
        isYearly: false,
        selectedPlan: 'pro' // Default selected plan
    };

    // Initialize
    updatePrices();

    // Event Listeners
    userCountInput.addEventListener('input', function (e) {
        state.users = parseInt(e.target.value);
        userCountDisplay.textContent = state.users;
        updatePrices();
    });

    billingToggle.addEventListener('change', function (e) {
        state.isYearly = e.target.checked;
        updatePrices();
    });

    // Plan Selection Logic
    const cards = document.querySelectorAll('.price-card');
    cards.forEach(card => {
        card.querySelector('button').addEventListener('click', function () {
            // Remove featured class from all
            cards.forEach(c => c.classList.remove('featured'));
            cards.forEach(c => {
                const btn = c.querySelector('button');
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline');
                // Reset text based on current lang
                btn.textContent = translations[currentLang].btn_select_plan;
                // Special case for enterprise if it was "Contact Sales" - wait, enterprise button is "Contact Sales" in HTML
                // But here we are making them all selectable?
                // The original code made them all selectable.
                // However, the enterprise button text in HTML is "联系销售" (Contact Sales).
                // If I click it, it becomes "Selected".
                // If I click another, it should revert to... "Contact Sales" or "Select Plan"?
                // The original code reverted to "选择方案" (Select Plan) for ALL buttons.
                // Let's stick to that behavior but use the translation key.

                // Actually, for Enterprise, it might be better to keep it as Contact Sales if not selected?
                // But the original code treated it as a selectable plan.
                // I will use 'btn_select_plan' for all reverted buttons to be consistent with original logic.
                // Except if the card id is enterprise-plan, maybe?
                // Let's just use btn_select_plan for simplicity as per original code.
                if (c.id === 'enterprise-plan') {
                    btn.textContent = translations[currentLang].btn_contact_sales;
                } else {
                    btn.textContent = translations[currentLang].btn_select_plan;
                }
            });

            // Add featured to clicked
            card.classList.add('featured');
            const btn = card.querySelector('button');
            btn.classList.remove('btn-outline');
            btn.classList.add('btn-primary');
            btn.textContent = translations[currentLang].btn_selected;

            state.selectedPlan = card.id.replace('-plan', '');
            updatePrices();
        });
    });

    function updatePrices() {
        // Calculate multipliers
        const userMultiplier = state.users;
        const timeMultiplier = state.isYearly ? 12 : 1;
        const discountMultiplier = state.isYearly ? (1 - yearlyDiscount) : 1;

        const personalUnit = basePrices.personal * discountMultiplier;
        const proUnit = basePrices.pro * discountMultiplier;
        const enterpriseUnit = basePrices.enterprise * discountMultiplier;

        const displayMultiplier = state.isYearly ? 12 : 1;

        personalPriceDisplay.textContent = Math.round(personalUnit * displayMultiplier);
        proPriceDisplay.textContent = Math.round(proUnit * displayMultiplier);
        enterprisePriceDisplay.textContent = Math.round(enterpriseUnit * displayMultiplier);

        // Calculate Total Summary
        let selectedBase = 0;
        if (state.selectedPlan === 'personal') selectedBase = basePrices.personal;
        if (state.selectedPlan === 'pro') selectedBase = basePrices.pro;
        if (state.selectedPlan === 'enterprise') selectedBase = basePrices.enterprise;

        const total = selectedBase * userMultiplier * displayMultiplier * discountMultiplier;

        totalPriceDisplay.textContent = '¥' + Math.round(total).toLocaleString();

        // Update billing text unit
        const t = translations[currentLang];
        billingTextDisplay.textContent = state.isYearly ? t.unit_year : t.unit_month;

        // Also update the period text in cards
        document.querySelectorAll('.period').forEach(el => {
            el.textContent = state.isYearly ? t.unit_year : t.unit_month;
        });
    }

    function updateContent() {
        const t = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                    el.placeholder = t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        });

        langToggleBtn.textContent = currentLang === 'zh' ? 'EN' : '中';
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

        // Update dynamic text in pricing
        updatePrices();

        // Update button states text
        cards.forEach(c => {
            const btn = c.querySelector('button');
            if (c.classList.contains('featured')) {
                btn.textContent = t.btn_selected;
            } else {
                if (c.id === 'enterprise-plan') {
                    btn.textContent = t.btn_contact_sales;
                } else {
                    btn.textContent = t.btn_select_plan;
                }
            }
        });
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateContent();
    });
});
