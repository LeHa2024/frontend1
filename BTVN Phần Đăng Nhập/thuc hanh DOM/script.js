document.addEventListener("DOMContentLoaded", function () {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const quoteElement = testimonialsContainer.querySelector(".text");
  const nameElement = testimonialsContainer.querySelector(".name");
  const authors = testimonialsContainer.querySelectorAll(".author");

  // Mockup data for users
  const users = [
    {
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      color: "#1abc9c",
    },
    {
      name: "Jane Smith",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "#3498db",
    },
    {
      name: "Emma Watson",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      color: "#e74c3c",
    },
    {
      name: "Mary Brown",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://randomuser.me/api/portraits/women/76.jpg",
      color: "#9b59b6",
    },
    {
      name: "Michael Johnson",
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      color: "#f39c12",
    },
  ];

  // Initialize with the first user
  updateTestimonial(0);

  // Add click event listeners to each author
  authors.forEach((author, index) => {
    author.addEventListener("click", () => {
      updateTestimonial(index);
      updateSelectedAuthor(index);
    });
  });

  // Function to update testimonial based on user index
  function updateTestimonial(index) {
    quoteElement.textContent = users[index].quote;
    nameElement.textContent = users[index].name;
    testimonialsContainer.style.backgroundColor = users[index].color;
  }

  // Function to update selected author UI
  function updateSelectedAuthor(selectedIndex) {
    authors.forEach((author, index) => {
      if (index === selectedIndex) {
        author.classList.add("selected");
      } else {
        author.classList.remove("selected");
      }
    });
  }
});
