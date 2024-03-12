// Get all the images that should trigger the popup
const images = document.querySelectorAll('.vacant1, .vacant2, .vacant3, .vacant4, .vacant5');

// Get the modal element
const modal = document.getElementById('my-5 page');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close');

// Function to display invoice details in the modal
function displayInvoiceDetails(invoice) {
  // Demo invoice details
 /* const demoInvoiceContent = `
    <h2>Invoice Details</h2>
    <p><strong>Invoice ID:</strong> ${invoice.id}</p>
    <p><strong>Amount:</strong> ${invoice.amount}</p>
    <p><strong>Date:</strong> ${invoice.date}</p>
    <!-- Add more demo invoice details as needed -->
  `;*/
  
  // Display invoice content in the modal
 /* document.getElementById('invoiceDetails').innerHTML = demoInvoiceContent;*/

  // Show the modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
 /* modal.style.display = 'none';*/
}

// Attach click event listeners to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Simulating a demo invoice object for each image click
    const demoInvoice = {
      id: 'INV-001',
      amount: '$100',
      date: 'December 25, 2023',
      // Add more demo invoice details if needed
    };
    displayInvoiceDetails(demoInvoice);
  });
});

// Close the modal when the user clicks on (x) button
closeBtn.addEventListener('click', closeModal);

// Close the modal when the user clicks anywhere outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


//togle bar
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

    allSideMenu.forEach(item=> {
        const li = item.parentElement;
    
        item.addEventListener('click', function () {
            allSideMenu.forEach(i=> {
                i.parentElement.classList.remove('active');
            })
            li.classList.add('active');
        })
    });
    
    
    
    
    // TOGGLE SIDEBAR
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    
    menuBar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');
    })
    
    
    
    
    
    
    
    const searchButton = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    const searchForm = document.querySelector('#content nav form');
    
    searchButton.addEventListener('click', function (e) {
        if(window.innerWidth) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if(searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('bx-search', 'bx-x');
            } else {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
            }
        }
    })
    
    
    
    
    
    if(window.innerWidth ) {
        sidebar.classList.add('hide');
    } else if(window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
    
    
    window.addEventListener('resize', function () {
        if(this.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }
    })
    
    
    
    const switchMode = document.getElementById('switch-mode');
    
    switchMode.addEventListener('change', function () {
        if(this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
    
    

//togle bar




function toggle(){
var blur=document.getElementById(page);
blur.classList.toggle('active');

}


