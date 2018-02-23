/* Data Copy
***********************************/
function dataTABS() {
  
  $('[data-tabs]').each(function (){

    var mdcTABS          =   window.mdcTABS = new mdc.tabs.MDCTabBar(this);

    var dataTABS         =   $(this).data("tabs");
    var dataDOTS         =   $(this).data("tabs--dots");
    var dataPANELS       =   $(this).data("tabs--panels");

    var mdcDOTS          =   document.querySelector(dataDOTS);
    var mdcPANELS        =   document.querySelector(dataPANELS);
  
    // Prevent Default Clicks
    mdcTABS.tabs.forEach(function (tab) {
      tab.preventDefaultOnClick = true;
    });
  
    // Update Dots
    function updateDot(index) {
      var activeDot = mdcDOTS.querySelector('.dot.active');
      if (activeDot) {
        activeDot.classList.remove('active');
      }
      var newActiveDot = mdcDOTS.querySelector('.dot:nth-child(' + (index + 1) + ')');
      if (newActiveDot) {
        newActiveDot.classList.add('active');
      }
    }
  
    // Update Panels
    function updatePanel(index) {
      var activePanel = mdcPANELS.querySelector('.panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = mdcPANELS.querySelector('.panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }
  
    // Update Tabs
    mdcTABS.listen('MDCTabBar:change', function ({
      detail: tabs
    }) {
      var nthChildIndex = tabs.activeTabIndex;
  
      updatePanel(nthChildIndex);
      updateDot(nthChildIndex);
    });
  
    // Dot clicked
    mdcDOTS.addEventListener('click', function (evt) {
      if (!evt.target.classList.contains('dot')) {
        return;
      }
  
      evt.preventDefault();
  
      var dotIndex = [].slice.call(mdcDOTS.querySelectorAll('.dot')).indexOf(evt.target);
  
      if (dotIndex >= 0) {
        mdcTABS.activeTabIndex = dotIndex;
      }
  
      updatePanel(dotIndex);
      updateDot(dotIndex);
    });

  });
}