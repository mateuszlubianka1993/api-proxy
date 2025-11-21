document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("deleteModal");
  const cancelBtn = document.getElementById("cancelDelete");
  const confirmDelete = document.getElementById("confirmDelete");
  const toast = document.getElementById("toast");
	let deleteForm = null;
  const url = new URL(window.location.href);
  const deleted = url.searchParams.get("deleted");

  function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  if (deleted) {
    showToast();

    url.searchParams.delete("deleted");
    window.history.replaceState({}, "", url);
  }

  document.querySelectorAll(".apiList__item_deleteBtn").forEach(btn => {
  	btn.addEventListener("click", (e) => {
      e.preventDefault();

      deleteForm = e.target.closest("form");
			modal.classList.add("show");
    })
  });

  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  confirmDelete.addEventListener("click", () => {
    if (deleteForm) {
      modal.classList.remove("show");

      deleteForm.submit();
    }
  });
});
