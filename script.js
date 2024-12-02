document.addEventListener("DOMContentLoaded", () => {
    // Ensure the body fades in when the content is ready
    document.body.classList.add('loaded');
    
    setupDropdowns();
    window.addEventListener('resize', setupDropdowns);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Optional: Fade in specific elements if desired
    fadeInElements();
});

function fadeInElements() {
    const elementsToFadeIn = document.querySelectorAll('.container, .header, .dropdown-menu, .department-details');
    elementsToFadeIn.forEach(element => {
        element.classList.add('loaded');
    });
}

function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const isMobile = window.innerWidth <= 768;

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none'; // Reset dropdown menu display

        if (isMobile) {
            dropdown.removeEventListener('click', handleDropdownClick);
            dropdown.removeEventListener('mouseover', showDropdown);
            dropdown.removeEventListener('mouseleave', hideDropdown);
            dropdown.addEventListener('click', handleDropdownClick);
        } else {
            dropdown.removeEventListener('click', handleDropdownClick);
            dropdown.addEventListener('mouseover', showDropdown);
            dropdown.addEventListener('mouseleave', hideDropdown);
        }
    });
}

function showDropdown(event) {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
}

function hideDropdown(event) {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
}

function handleDropdownClick(event) {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    const isMenuVisible = dropdownMenu.style.display === 'block';

    // Hide all dropdown menus first
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');

    // Toggle the clicked menu visibility
    dropdownMenu.style.display = isMenuVisible ? 'none' : 'block';
}

// Scroll handler function
function handleScroll() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Add click event listeners to dropdown items for redirection
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        // Allow the default action (navigation) to occur
        // Note: You can also add additional logic here if needed
    });
});

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const burger = document.querySelector(".burger");
    const header = document.querySelector('header');
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
    if (navLinks.classList.contains('active')) { header.classList.add('header-burger-open'); } else { header.classList.remove('header-burger-open'); }
}

// Select all dropdowns with an arrow
document.querySelectorAll('.nav-links .dropdown').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click events from bubbling up
        // Toggle active class to expand/collapse menu and rotate arrow
        item.classList.toggle('active');
    });
});

// Scroll handler function
function handleScroll() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Department details overlay
document.addEventListener('DOMContentLoaded', function () {
    const departmentLogos = document.querySelectorAll('.department-logo');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');
    const departmentDetails = document.getElementById('department-details');

    departmentLogos.forEach(logo => {
        logo.addEventListener('click', function () {
            const departmentName = this.getAttribute('data-department');
            departmentDetails.innerHTML = `<h2>${departmentName}</h2><p>Details about ${departmentName}...</p>`;
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

        const departmentInfo = {
            "Civil Engineering": `
                <h2>Bachelor of Science in Civil Engineering</h2>
                <p>The Bachelor of Science in Civil Engineering Program was first proposed to be offered in Botolan Campus under the Self-Liquidating Program Scheme in early 2002 under the leadership of President Feliciano S. Rosete. The RMTU Board of Regents approved the proposal in early 2003 but Iba Campus was chosen as its venue on the issues of facilities and faculty to handle the program in Botolan Campus. The BSCE program started in the first semester of the school year 2003-2004 under the Institute of Evening Opportunity Programs with Prof. Cecilia A. Santiago as the Dean and close coordination with Engr. Liza M. Atienza, the Dean of the College of Engineering and Architecture.</p>
                <p>BSCE had its first batch graduate in March 2008 with a seventy percent passing rate in the board examination. In 2010, the Board of Regents and the DBM approved its transfer to CEA as one of the RMTU regular programs. The BSCE received its Certificate of Program Compliance and level I AACCUP accreditation in 2016 and level II in 2019.</p>`,
            "Computer Engineering": `
                <h2>Bachelor of Science in Computer Engineering</h2>
                <p>The Bachelor of Science in Computer Engineering in President Ramon Magsaysay State University began in the 2nd Semester of the Academic Year 2001-2002 when the then Ramon Magsaysay Technological University (RMTU) Board of Regents (BOR) approved the offering of self-liquidating degree programs in evening classes. The degree program was officially opened in the Academic Year 2002-2003 under the Institute of Evening Opportunity Program (IEOP) headed by Engr. Juvelyn M. Bueno as the first Program Chair. The first batch graduated in 2007.</p>
                <p>Due to the increasing population of students, the program was offered in Morning and Evening Sessions in AY 2004-2005 under the College of Communications and Information Technology (CCIT) and IEOP. The last batch of BSCpE in the IEOP graduated in 2012. From then on, the program was offered only in the CCIT. In 2018, in compliance with the recommendation of the Commission on Higher Education (CHED), the program was transferred under the College of Engineering (COE).</p>`,
            "Electrical Engineering": `
                <h2>Bachelor of Science in Electrical Engineering</h2>
                <p>The Bachelor of Science in Electrical Engineering in the President Ramon Magsaysay State University began when the RMPC Board of Regents approved the curricula leading to the degrees of Bachelor of Science and Master of Science in Electrical Engineering. The degree program was officially opened, and the Department was first headed by Engr. Simon Jaring. The Department graduated its first batch of students in 2001, as one of oldest programs in the College.</p>`,
            "Mechanical Engineering": `
                <h2>Bachelor of Science in Mechanical Engineering</h2>
                <p>The Bachelor of Science in Mechanical Engineering in President Ramon Magsaysay State University began when the RMPC Board of Regents approved the curricula leading to the degrees of Bachelor of Science and Master of Science in Mechanical Engineering. The degree program was officially opened and the department was first headed by Engr. Noel M. Dioyan. The department graduated its first batch of students in 2001, as one of the oldest programs in the College.</p>`
        };
    
        departmentLogos.forEach(logo => {
            logo.addEventListener('click', function () {
                const departmentName = this.getAttribute('data-department');
                departmentDetails.innerHTML = departmentInfo[departmentName] || `<h2>${departmentName}</h2><p>Details about ${departmentName}...</p>`;
                overlay.classList.remove('hidden');
                overlay.style.display = 'flex';
            });
        });
    
        function hideOverlay() {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500); // Match this to the duration of the fadeOut animation
        }
    
        closeButton.addEventListener('click', hideOverlay);
    
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                hideOverlay();
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Ensure the body fades in when the content is ready
        document.body.classList.add('loaded');
    
        // Fade in navigation bar first
        const navbar = document.querySelector('header');
        navbar.classList.add('fade-in');
    
        // Add a slight delay before fading in the rest of the content
        setTimeout(() => {
            const contentElements = document.querySelectorAll('.container, .header, .dropdown-menu, .department-details');
            contentElements.forEach(element => {
                element.classList.add('fade-in');
            });
        }, 1000); // Adjust the delay (in milliseconds) as needed
    
        setupDropdowns();
        window.addEventListener('resize', setupDropdowns);
        window.addEventListener('scroll', handleScroll);
    });
    