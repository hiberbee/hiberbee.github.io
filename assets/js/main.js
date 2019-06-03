function toggleContent(e) {
    e.stopPropagation();
    const button = this;
    const content = document.getElementById('menu');

    e.preventDefault();

    if (content.getAttribute('aria-hidden') === 'true') {
        content.setAttribute('aria-hidden', 'false');
        button.setAttribute('aria-expanded', 'true');
    } else {
        content.setAttribute('aria-hidden', 'true');
        button.setAttribute('aria-expanded', 'false');
    }
}

document.getElementById('page-top').addEventListener('click', function () {
    const content = document.getElementById('menu');
    if (document.getElementById('menu').getAttribute('aria-hidden') === 'false') {
        content.setAttribute('aria-hidden', 'true');
        document.getElementById('burger').setAttribute('aria-expanded', 'false');
    }
});

document.getElementById('burger').addEventListener('click', toggleContent);

function handleFacebookEvent() {
    FB.AppEvents.logEvent(
        this.getAttribute('id'),
        null,
        {}
    );
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
