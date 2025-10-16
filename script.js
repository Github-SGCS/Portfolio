const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

function openModal(id) {
  const content = {
    project1: "<h2>Project 1</h2><p>Describe your first project or case study here.</p>",
    project2: "<h2>Project 2</h2><p>Details for another project.</p>",
    blog1: "<h2>Blog Post 1</h2><p>Your first blog entry.</p>",
    blog2: "<h2>Blog Post 2</h2><p>Another blog post here.</p>",
    cert1: "<h2>CompTIA Security+</h2><p>Issued by CompTIA. Verification link here.</p>",
    cert2: "<h2>Microsoft Certified: Security Engineer</h2><p>Issued by Microsoft.</p>"
  };
  modalBody.innerHTML = content[id] || "<h2>Item</h2><p>Content not found.</p>";
  modal.style.display = "block";
}

function closeModal() { modal.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == modal) closeModal();
};
