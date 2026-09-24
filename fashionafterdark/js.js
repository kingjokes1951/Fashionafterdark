<script>
  const forminit = new Forminit();
  const FORM_ID = "gwj7290nl8v";

  document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { data, error } = await forminit.submit(FORM_ID, formData);

    const status = document.getElementById("form-status");

    if (error) {
      status.textContent = error.message;
      return;
    }

    status.textContent = "Message sent successfully!";
    e.target.reset();
  });
</script>