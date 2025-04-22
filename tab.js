const Tabs = document.querySelectorAll('.tab-list_dot');

Tabs.forEach((tab) =>
    tab.addEventListener("click", changePanel)
)

export function changePanel(details) {
    const TargetTab = details.target;
    const TargetTabAriaControl = TargetTab.getAttribute('aria-controls')
    const TargetCard = details.target.closest('.card');
    const TabParent = TargetTab.parentNode;

    //selecting All Panel and Targeted Panel
    const TargetAllPanel = TargetCard.querySelectorAll('[role]');
    const TargetPanel = TargetCard.querySelectorAll(`[role = "${TargetTabAriaControl}"]`);

    //changing the Tablist dot color
    TabParent.querySelector('[aria-selected="true"]').setAttribute("aria-selected","false")
    TargetTab.setAttribute("aria-selected","true");

    //It first Hide all the Panel and Render only the Targeted Panel
    HideShowPanel(TargetAllPanel, "none");
    HideShowPanel(TargetPanel, "flex");

    return 0;

}

//Function to Hide and Showing Panel 
function HideShowPanel(panel, display){
    panel.forEach(e => {
        e.style.display = display;
    })
}
