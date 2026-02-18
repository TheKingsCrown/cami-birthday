document.addEventListener("DOMContentLoaded", function() {
    // add click event to presents
    document.querySelectorAll(".present").forEach(p => {
        p.addEventListener("click", function() {
            this.classList.add("pop-out");
        });
    });

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
            // stops counter once it's completed
            if (section_counter == sections.length) {
                return;
            }
            // resets counters and scrolls to next message
            if (line_counter == message_lines) {
                section_counter += 1;
                sections[section_counter].scrollIntoView();

                line_counter = 0;
                section_message = formMessage(sections[section_counter]);
                message_lines = section_message.length;
            }

            // thumbs through the message one by one
            else {
                section_message[line_counter].classList.add("fade-in");
                line_counter += 1;
            }
        }
    });
    // forms message by appending images at the end
});

function formMessage(section) {
    var message = Array.from(section.querySelectorAll("h1"));
    if (section.querySelector(".birthday-card")) {
        message.push(section.querySelector(".birthday-card"));
    }
    return message;
}