// ^ Write your JavaScript code here

var navLinks = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
var themeToggleButton = document.getElementById("theme-toggle-button");
var htmlElement = document.documentElement;
// Hamburger Button//
var mobileMenuButton = document.querySelector(".mobile-menu-btn");
var navLinksContainer = document.querySelector(".nav-links");
//Scroll to Top Button//
var scrollTopButton = document.getElementById("scroll-to-top");
//Settings Sidebar//
var openSettingToggla = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettingSidebar = document.getElementById("close-settings");
var colorSession = document.getElementById("theme-colors-grid");
var resetSidebar = document.getElementById("reset-settings");
var fontSession = document.querySelectorAll(".font-option");

//portfolio Tabs//
var portfolioFilters = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

//testimonials-carousel//
var testimonialsCarousel = document.getElementById("testimonials-carousel");
var testimonialCard = document.querySelector(".testimonial-card").offsetWidth;
var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");
var carouselIndicator = document.querySelectorAll(".carousel-indicator");




// navlinkActive
function updateActiveLink() {
    var activeIndex = 0;
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");

        var sectionId = navLinks[i].getAttribute("href");
        var currentSection = document.querySelector(sectionId);
        var sectionPosition = currentSection.getBoundingClientRect();
        if(sectionPosition.top <= 150){
            activeIndex = i;
        }
        

    }navLinks[activeIndex].classList.add("active");
}
updateActiveLink()
window.addEventListener("scroll", updateActiveLink);


//localstorge//
var savedModeTheme = localStorage.getItem("theme");
//dark Mode//
if(savedModeTheme === "dark"){
    htmlElement.classList.add("dark");
}
//light mode//
if(savedModeTheme === "light"){
    htmlElement.classList.remove("dark");
}
//addevent mode//
themeToggleButton.addEventListener("click" , function(){
    htmlElement.classList.toggle("dark");
    if(htmlElement.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light")
    }

})
//// Hamburger Button//
mobileMenuButton.addEventListener("click", function(){
    navLinksContainer.classList.toggle("active")
})
for(var i = 0 ; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navLinksContainer.classList.remove("active");
    })
}

//Scroll to Top Button//
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        scrollTopButton.classList.remove("opacity-0")
        scrollTopButton.classList.remove("invisible")
    }else{
        scrollTopButton.classList.add("opacity-0")
        scrollTopButton.classList.add("invisible")
    }

})

scrollTopButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Settings Sidebar//
openSettingToggla.addEventListener("click", function () {
    settingsSidebar.classList.remove("translate-x-full");

    openSettingToggla.classList.add("gear-moved");

    openSettingToggla.setAttribute("aria-expanded", "true");
});
closeSettingSidebar.addEventListener("click", function () {
    settingsSidebar.classList.add("translate-x-full");

    openSettingToggla.classList.remove("gear-moved");

    openSettingToggla.setAttribute("aria-expanded", "false");
});


// Load Saved Font //
var savedFont = localStorage.getItem("selectedFont");

// Update Selected Font Style //

function updateSelectedFont(selectedButton) {
    var allFontButtons = document.querySelectorAll(".font-option");

    for (var i = 0; i < allFontButtons.length; i++) {
        allFontButtons[i].classList.remove(
            "border-primary",
            "bg-primary/5",
            "dark:bg-primary/10",
            "active"
        );

        allFontButtons[i].classList.add(
            "border-slate-200",
            "dark:border-slate-700"
        );
    }

    selectedButton.classList.remove(
        "border-slate-200",
        "dark:border-slate-700"
    );

    selectedButton.classList.add(
        "border-primary",
        "bg-primary/5",
        "dark:bg-primary/10",
        "active"
    );
}


// Restore Saved Font //
if (savedFont) {
    htmlElement.classList.add("font-" + savedFont);

    var savedFontButton = document.querySelector(
        '.font-option[data-font="' + savedFont + '"]'
    );

    if (savedFontButton) {
        updateSelectedFont(savedFontButton);
    }
}

// Font Options //
for (var i = 0; i < fontSession.length; i++) {
    fontSession[i].addEventListener("click", function () {
        var selectFont = this.getAttribute("data-font");

        // Apply Selected Font //
        htmlElement.classList.remove(
            "font-alexandria",
            "font-tajawal",
            "font-cairo"
        );

        htmlElement.classList.add("font-" + selectFont);

        // Update Selected Font Style //
        updateSelectedFont(this);

        // Save Selected Font //
        localStorage.setItem("selectedFont", selectFont);
    });
}

 
// colorSession //
var themeColors = [
    {
        title: "Purple Blue",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
    },
    {
        title: "Pink Orange",
        primary: "#ec4899",
        secondary: "#f97316",
        accent: "#fb923c"
    },
    {
        title: "Green Emerald",
        primary: "#10b981",
        secondary: "#059669",
        accent: "#34d399"
    },
    {
        title: "Blue Cyan",
        primary: "#3b82f6",
        secondary: "#06b6d4",
        accent: "#22d3ee"
    },
    {
        title: "Red Rose",
        primary: "#ef4444",
        secondary: "#f43f5e",
        accent: "#fb7185"
    },
    {
        title: "Amber Orange",
        primary: "#f59e0b",
        secondary: "#ea580c",
        accent: "#fbbf24"
    }
];

// Restore saved colors //
var savedColorTheme = localStorage.getItem("selectedTheme");

// Update selected color button //
function updateSelectorColors(selectedButton) {
    var allColorsBtn = colorSession.querySelectorAll("button");

    for (var i = 0; i < allColorsBtn.length; i++) {
        allColorsBtn[i].classList.remove(
            "ring-2",
            "ring-primary",
            "ring-offset-2",
            "ring-offset-white",
            "dark:ring-offset-slate-900"
        );
    }

    selectedButton.classList.add(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900"
    );
}

// Create color buttons //
for (var i = 0; i < themeColors.length; i++) {
    var colorsBtn = document.createElement("button");

    colorsBtn.className = 
    "w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm";

    colorsBtn.title = themeColors[i].title;

    colorsBtn.setAttribute("data-primary", themeColors[i].primary);
    colorsBtn.setAttribute("data-secondary", themeColors[i].secondary);
    colorsBtn.setAttribute("data-accent", themeColors[i].accent);

    colorsBtn.style.background = "linear-gradient(135deg, " +
        themeColors[i].primary + ", " +
        themeColors[i].secondary + ")";

    colorSession.append(colorsBtn);

    // Change colors on click //
    colorsBtn.addEventListener("click", function () {
        var selectedPrimary = this.getAttribute("data-primary");
        var selectedSecondary = this.getAttribute("data-secondary");
        var selectedAccent = this.getAttribute("data-accent");

        // Apply selected colors //
        htmlElement.style.setProperty("--color-primary", selectedPrimary);
        htmlElement.style.setProperty("--color-secondary", selectedSecondary);
        htmlElement.style.setProperty("--color-accent", selectedAccent);

        // Update selected button //
        updateSelectorColors(this);

        // Save selected theme //
        var selectedTheme = {
            primary: selectedPrimary,
            secondary: selectedSecondary,
            accent: selectedAccent
        };

        localStorage.setItem("selectedTheme", JSON.stringify(selectedTheme));
    });
}

// Apply saved colors when opening the page //
if (savedColorTheme !== null) {
    var theme = JSON.parse(savedColorTheme);

    htmlElement.style.setProperty("--color-primary", theme.primary);
    htmlElement.style.setProperty("--color-secondary", theme.secondary);
    htmlElement.style.setProperty("--color-accent", theme.accent);

    // Restore selected button //
    var savedButton = colorSession.querySelector(
        '[data-primary="' + theme.primary + '"]'
    );

    if (savedButton) {
        updateSelectorColors(savedButton);
    }
}



// Reset Settings //
function resetSetting() {

    // Reset Font //
    htmlElement.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
    );

    htmlElement.classList.add("font-tajawal");

    // Save Default Font //
    localStorage.setItem("selectedFont", "tajawal");

    // Reset Selected Font //
    var defaultFontButton = document.querySelector(
        '.font-option[data-font="tajawal"]'
    );

    if (defaultFontButton) {
        updateSelectedFont(defaultFontButton);
    }

    // Reset Colors //
    htmlElement.style.setProperty("--color-primary", "#6366f1");
    htmlElement.style.setProperty("--color-secondary", "#8b5cf6");
    htmlElement.style.setProperty("--color-accent", "#a855f7");

    // Save Default Colors //
    var defaultTheme = {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
    };

    localStorage.setItem("selectedTheme", JSON.stringify(defaultTheme));

    // Reset Selected Color //
    var defaultColorButton = colorSession.querySelector(
        '[data-primary="#6366f1"]'
    );

    if (defaultColorButton) {
        updateSelectorColors(defaultColorButton);
    }
}
// Reset Button Event //
resetSidebar.addEventListener("click", function () {
    resetSetting();
});

////portfolio Tabs//
for (var i = 0; i < portfolioFilters.length; i++) {
    portfolioFilters[i].addEventListener("click", function () {
        var selectedFilter = this.getAttribute("data-filter");
    // Filter Portfolio Items //
    for (var j = 0; j < portfolioItems.length; j++) {
        var itemCategory = portfolioItems[j].getAttribute("data-category");
        if (selectedFilter === "all" || selectedFilter === itemCategory) {
            portfolioItems[j].classList.remove("filter-hidden");
            portfolioItems[j].classList.remove("filter-show");
            // Restart animation
            void portfolioItems[j].offsetWidth;
            portfolioItems[j].classList.add("filter-show");
        } else {
            portfolioItems[j].classList.remove("filter-show");
            portfolioItems[j].classList.add("filter-hidden");
        }
        }
    
        // Update Active Filter Button //
    for (var k = 0; k < portfolioFilters.length; k++) {
    portfolioFilters[k].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50"
        );

    portfolioFilters[k].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "hover:bg-slate-100",
        "dark:hover:bg-slate-700",
        "border",
        "border-slate-300",
        "dark:border-slate-700"
    );

    portfolioFilters[k].setAttribute("aria-pressed", "false");
}

this.classList.remove(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "border",
    "border-slate-300",
    "dark:border-slate-700"
);

this.classList.add(
    "active",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
    "shadow-lg",
    "shadow-primary/50"
);

this.setAttribute("aria-pressed", "true");
    });
}



var totalCard = testimonialsCarousel.children.length;
var currentIndex = 0;
//testimonials-carousel//
//next btn//
nextTestimonial.addEventListener("click", function(){
    currentIndex++;
    if(currentIndex === totalCard - 2){
        currentIndex = 0; 
    }
    autoSlide();
})
//prev btn//
prevTestimonial.addEventListener("click", function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = totalCard - 3;
    }
    autoSlide();
})
function autoSlide (){
    testimonialCard = document.querySelector(".testimonial-card").offsetWidth;
    testimonialsCarousel.style.transform = `translateX(${testimonialCard*currentIndex}px)`
    updateIndecator();
    nextTestimonial.classList.toggle(
    "opacity-50",
    currentIndex === totalCard - 3
);

prevTestimonial.classList.toggle(
    "opacity-50",
    currentIndex === 0
);
}

//indecator//
function updateIndecator(){
    for(var i = 0; i < carouselIndicator.length; i++){
        if(i === currentIndex){
            carouselIndicator[i].classList.remove("bg-slate-400","dark:bg-slate-600");
            carouselIndicator[i].classList.add("active","bg-accent","scale-125");
        }else{
            carouselIndicator[i].classList.remove("active","bg-accent","scale-125");
            carouselIndicator[i].classList.add("bg-slate-400","dark:bg-slate-600");

        }
    }
    
}
for(var i = 0; i < carouselIndicator.length; i++){
        carouselIndicator[i].addEventListener("click" , function(e){
            currentIndex = parseInt(e.currentTarget.getAttribute("data-index"), 10);
            autoSlide();

        })
        
    }
