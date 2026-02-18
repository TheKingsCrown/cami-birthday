document.addEventListener("DOMContentLoaded", function() {
    // add click event to presents
    document.querySelectorAll(".present").forEach(p => {
        p.addEventListener("click", function() {
            this.classList.add("pop-out");
            
            
            var targetId = this.getAttribute("data-target");
            var voucher  = document.querySelector(targetId);

            setTimeout(function() {
                voucher.classList.add("pop-in");
            }, 400);
        });
    });
    document.querySelectorAll(".voucher").forEach(v => {
        v.addEventListener("click", function() {
            this.classList.remove("pop-in");
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
    var section_index = 0;
    var line_counter = 0;

    // allow continuation
    window.addEventListener('keydown', (event) => {
        if (event.repeat ||  section_counter == sections.length) {
            return;
        }
        if (event.code === "Space") {
            // stops counter once it's completed
            if (section_counter == sections.length) {
                return;
            }
            // scroll back through the messages
            if (section_index < section_counter) {
                section_index += 1;
                sections[section_index].scrollIntoView();
            }
            // resets counters and scrolls to next message
            else if (line_counter == message_lines) {
                section_counter += 1;
                section_index += 1;
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
        if (event.code === "Backspace") {
            if (section_index == 0) {
                return;
            }
            section_index -= 1;
            sections[section_index].scrollIntoView();
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