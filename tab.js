const Tabs = document.querySelectorAll('.tab-list_dot');
const PostStatus = document.querySelectorAll('[role = "post-status"]');
const Description = document.querySelectorAll('[role = "skill-description"]');

const changePanel = (data) => {
    const TargetTab = data.target;
    const TargetTabAriaControl = TargetTab.getAttribute('aria-controls')
    const TargetCard = data.target.closest('.card');
    const TabParent = TargetTab.parentNode;

    //selecting All Panel and Target Panel
    const TargetAllPanel = TargetCard.querySelectorAll('[role]');
    const TargetPanel = TargetCard.querySelectorAll(`[role = "${TargetTabAriaControl}"]`);

    
    //changing the Tablist dot color
    TabParent.querySelector('[aria-selected="true"]').setAttribute("aria-selected","false")
    TargetTab.setAttribute("aria-selected","true");

    //It first Hide all the Panel and Render only the Targeted Panel
    HideShowPanel(TargetAllPanel, "none");
    HideShowPanel(TargetPanel, "flex")

}

//Function to Hide and Showing Panel 
const HideShowPanel = (panel, display) => {
    panel.forEach(e => {
        e.style.display = display;
    })
}

Tabs.forEach((tab) =>
    tab.addEventListener("click", changePanel)
)

