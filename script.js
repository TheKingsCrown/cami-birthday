document.addEventListener("DOMContentLoaded", function() {

    // Focus window and scroll to start
    window.focus();
    let sections = document.querySelectorAll(".content-section");
    sections[0].scrollIntoView();
    
    var section_message = sections[0].querySelectorAll("h1");
    var message_lines = section_message.length;
    var section_counter = 0;
    var line_counter = 0;

    // allow continuation
    window.addEventListener('keydown', (event) => {
        if (event.repeat) {
            return;
        }
        if (event.code === "Space") {
            if (line_counter == message_lines) {
                section_counter += 1;
                sections[section_counter].scrollIntoView();

                line_counter = 0;
                section_message = sections[section_counter].querySelectorAll("h1")
                message_lines = section_message.length;
            }
            else {
                section_message[line_counter].classList.add("fade-in");
                line_counter += 1;
            }
        }
    });
});