const Tabs = document.querySelectorAll('.tab-list_dot');
const PostStatus = document.querySelectorAll('[role = "post-status"]');
const Description = document.querySelectorAll('[role = "skill-description"]');

const changePanel = (data) => {
    const TargetTab = data.target;
    const TargetCard = data.target.closest('.card');
    const TabParent = TargetTab.parentNode;

    //selecting the hidden and visible things
    const TargetVisiblePanel = TargetCard.querySelectorAll('[aria-hidden="false"]');
    const TargetInvisiblePanel = TargetCard.querySelectorAll('[aria-hidden="true"]');
    
    //changing the Tablist dot color
    TabParent.querySelector('[aria-selected="true"]').setAttribute("aria-selected","false")
    TargetTab.setAttribute("aria-selected","true");

    TargetVisiblePanel.forEach(visiblePanel => {
        visiblePanel.setAttribute("aria-hidden","true");
        visiblePanel.style.display = 'none';
    })

    TargetInvisiblePanel.forEach(invisiblePanel => {
        invisiblePanel.setAttribute("aria-hidden","false");
        invisiblePanel.style.display = 'flex';
    })

}

Tabs.forEach((tab) =>
    tab.addEventListener("click", changePanel)
)
