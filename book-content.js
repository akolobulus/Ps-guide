// Book content and reading functionality with copy protection
// Contains the book chapters and reading interface controls

// Book content data
const bookContent = {
    title: "Simplest Guide in Public Speaking",
    author: "Favour Ebi Dakoru",
    totalPages: 50,
    totalChapters: 6,
    amazonSoftCopyLink: "https://amazon.com/dp/YOUR_KINDLE_ASIN", // Replace with actual Amazon Kindle link
    amazonHardCopyLink: "https://amazon.com/dp/YOUR_PAPERBACK_ASIN", // Replace with actual Amazon paperback link
    chapters: [
        {
            id: 1,
            title: "The Law of Eye Contact",
            content: `
                <h2>Chapter One: The Law of Eye Contact</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Unlocking Connection, Trust, and Influence</h3>

                <p>The eyes, often called the "windows to the soul" are one of the most powerful tools a speaker can wield. Long before words are spoken, eyes communicate. They tell a story of their own. They reveal confidence, fear, honesty, doubt, joy, or tension. In the realm of public speaking, eye contact becomes far more than a mechanical action, it becomes a bridge. A bridge between you, the speaker, and the minds and hearts of your audience.</p>

                <h3>The Silent Language of the Eyes</h3>
                <p>Have you ever been in a room where someone entered and, without saying a word, commanded attention just by how they looked at people? That's not charisma by accident. That's visual engagement, one of the most compelling tools in any speaker's arsenal.</p>

                <p>Eyes transmit nonverbal cues faster than words. In fact, according to psychological studies, the majority of communication is nonverbal, and eye contact plays a leading role. When you stand before an audience and intentionally make eye contact, you're not just looking, you're saying, "I see you. I respect you. I want you to hear what I'm saying." That single gesture is capable of breaking barriers, even before your first sentence.</p>

                <p>But beyond perception and energy, eye contact allows you to gauge your most important feedback system: the audience itself. Are they engaged? Are they confused? Are they inspired? Are they nodding in agreement, or struggling to stay awake? Your eyes become sensors that help you make real-time adjustments to your tone, speed, and content.</p>

                <h3>What Eye Contact Actually Does for You</h3>
                <p>When done right, eye contact does the following:</p>
                <ol>
                    <li><strong>Builds Trust:</strong> We naturally trust people who look us in the eyes. In a presentation, direct eye contact fosters credibility. If you look away too often, your audience may sense fear, dishonesty, or lack of confidence, even if your content is solid.</li>
                    <li><strong>Increases Retention:</strong> People are more likely to remember what was said when the speaker made eye contact. The eyes help lock in memory and sharpen focus.</li>
                    <li><strong>Commands Attention:</strong> We are wired to respond to gaze. A speaker who actively connects visually is harder to ignore.</li>
                    <li><strong>Reduces Fear:</strong> Ironically, the very thing many new speakers fear, eye contact, is one of the best remedies for stage fright. Why? Because when you make eye contact, your attention shifts outward instead of obsessing inward about your fear.</li>
                    <li><strong>Encourages Feedback:</strong> Whether you're speaking in Lagos, London, or Los Angeles, good eye contact helps you "read the room." If people are distracted, frowning, nodding, or smiling, you'll notice it, and you can respond accordingly.</li>
                </ol>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 This is just a preview! Get the Complete Chapter</h3>
                    <p>To read the complete chapter including Common Mistakes, Cultural Context, Practical Exercises, and more:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "The Law of Content",
            content: `
                <h2>Chapter Two: The Law of Content</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Mastering What You Say Before You Step on Stage</h3>

                <p>If you've ever sat in a lecture hall, yawning through a dull presentation, or maybe attended a seminar where the speaker blew your mind with just a few words, you've already witnessed the difference content can make.</p>

                <p>In the world of public speaking, the content of your message is your currency. It's your power. And it's what separates great speakers from forgettable ones. While delivery, voice modulation, body language, and even your fashion sense matter, it's the substance of your message, what you say and how well you say it, that truly leaves an impact.</p>

                <h3>Content Is King</h3>
                <p>You might have heard the phrase "content is king" used in digital marketing or social media. But in public speaking, it's the law.</p>
                
                <p>You can have the charisma of a celebrity, the stage presence of a rock star, and the confidence of a lion, but if your content is weak, scattered, or unclear, your speech will land flat.</p>

                <p>Think about the last time a speaker gave you goosebumps. What did they say? Chances are, they weren't just loud or funny, they said something that mattered, and they said it well. That's the essence of content: meaningful, relevant, and well-structured ideas delivered with clarity.</p>

                <h3>Start with Mastery: Know Your Stuff</h3>
                <p>Here's the truth, students don't like being lied to (No one does anyway). And they can tell when you're bluffing.</p>
                
                <p>Before you stand before any audience, be it your classmates, a conference crowd, or a community group, ask yourself: "Do I understand this topic deeply enough to teach it?"</p>

                <p>You don't have to know everything, but you must know enough. Enough to explain it simply. Enough to handle questions. Enough to inspire confidence. This is where research becomes your best friend. Use it to gather facts, current trends, stories, case studies, statistics, whatever it takes to build rock-solid content.</p>

                <p><em>In school, we research for assignments. As a speaker, you research to change lives.</em></p>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Continue Reading the Complete Chapter</h3>
                    <p>Learn about Structure, Stories & Humor, Repetition techniques, and much more in the complete book:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            title: "The Law of Time Management",
            content: `
                <h2>Chapter Three: The Law of Time Management</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Because Every Second Counts on Stage and in Life</h3>

                <p>It was a hot Friday afternoon at a university auditorium in Lagos. The program was scheduled to begin at 12 noon. The hall was filled with students, lecturers, some clergy, and industry executives invited to speak on "Leadership and the Next Generation."</p>

                <p>By 12:20, the first speaker, an energetic youth leader, took the mic. He was brilliant, no doubt. His story was inspiring. The crowd was nodding, clapping, even cheering at some points. But by 12:50, the atmosphere changed. Students started checking their phones. Lecturers whispered among themselves. One executive quietly stepped out.</p>

                <p><strong>Why?</strong></p>

                <p>The speaker had long exceeded his 15-minute time slot and showed no sign of ending. "Let me round up with this last point," he said, then went on for 20 more minutes.</p>

                <p>His message was golden, but his delivery violated one of the most sacred laws of public speaking: <em>The Law of Time Management.</em></p>

                <h3>Time Is a Non-Renewable Resource</h3>
                <p>In the fast-paced world of speaking and leadership, time is not just money, it's your reputation.</p>

                <p>Whether you are a student presenting a final year project, a pastor delivering a Sunday sermon, a teacher handling a class period, or an executive pitching to investors, your ability to manage time is a reflection of your discipline, your preparation, and your respect for others.</p>

                <p>There's a quote often attributed to Benjamin Franklin: <em>"Lost time is never found again."</em></p>

                <p>If you waste it, you've lost something you can't get back. For speakers, wasting time, either by rambling, arriving late, or exceeding your time slot, costs you credibility, influence, and audience trust.</p>

                <h3>The Myth of "It's Just a Few Minutes"</h3>
                <p>Let's talk about the phrase most commonly heard from speakers who lack time discipline: <em>"Let me just add one more thing…"</em></p>

                <p>One more thing turns into 10 more minutes. Then 15. Then you're being told to wrap up while you're still halfway through your PowerPoint slides.</p>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Chapter</h3>
                    <p>Learn about Backward Planning, Punctuality, Tools & Tips, and more time management secrets:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 4,
            title: "The Law of Charisma",
            content: `
                <h2>Chapter Four: The Law of Charisma</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Coming Soon in the Full Book</h3>

                <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p><strong>📖 Preview Available</strong> - This chapter covers the fourth fundamental law of public speaking.</p>
                </div>

                <p>Discover how to develop your personal speaking style and magnetic presence that captivates audiences. Learn the secrets of charismatic speakers and how to authentically connect with any audience.</p>

                <h3>What You'll Learn:</h3>
                <ul>
                    <li>Understanding authentic charisma vs. forced personality</li>
                    <li>Developing your unique speaking voice</li>
                    <li>Building magnetic presence on stage</li>
                    <li>Self-exploration techniques for speakers</li>
                    <li>Connecting with diverse audiences</li>
                </ul>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Book</h3>
                    <p>Access all 6 laws including The Law of Charisma with practical exercises and real-world examples:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 5,
            title: "The Law of Dress Code",
            content: `
                <h2>Chapter Five: The Law of Dress Code</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Coming Soon in the Full Book</h3>

                <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p><strong>📖 Preview Available</strong> - This chapter covers the fifth fundamental law of public speaking.</p>
                </div>

                <p>Learn how your appearance sends powerful messages before you even speak. Master the art of dressing appropriately for different speaking contexts and audiences.</p>

                <h3>What You'll Learn:</h3>
                <ul>
                    <li>The psychology of first impressions</li>
                    <li>Dressing for different speaking contexts</li>
                    <li>Cultural considerations in dress code</li>
                    <li>Building confidence through appropriate attire</li>
                    <li>Professional presentation guidelines</li>
                </ul>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Book</h3>
                    <p>Access all 6 laws including The Law of Dress Code with practical guidelines and examples:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            title: "The Law of Preparation",
            content: `
                <h2>Chapter Six: The Law of Preparation</h2>
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Coming Soon in the Full Book</h3>

                <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p><strong>📖 Preview Available</strong> - This chapter covers the sixth and final fundamental law of public speaking.</p>
                </div>

                <p>Master the art of thorough preparation that transforms anxiety into confidence. Learn systematic approaches to preparing for any speaking opportunity.</p>

                <h3>What You'll Learn:</h3>
                <ul>
                    <li>Comprehensive preparation strategies</li>
                    <li>Turning fear into confidence through readiness</li>
                    <li>Research and content development techniques</li>
                    <li>Rehearsal methods that work</li>
                    <li>Mental and physical preparation</li>
                </ul>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Book</h3>
                    <p>Access all 6 laws including The Law of Preparation with detailed action steps:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Buy the Complete Book
                        </a>
                    </div>
                </div>
            `
        }
    ]
};

// Reading interface functionality
let currentChapter = 1;
let fontSize = 18;
let isDarkMode = false;

document.addEventListener('DOMContentLoaded', function() {
    // Copy protection
    implementCopyProtection();

    // Initialize reading interface
    if (document.getElementById('book-content')) {
        initializeReadingInterface();
    }
});

// Copy protection implementation
function implementCopyProtection() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showCopyProtectionMessage();
        return false;
    });

    // Disable common copy shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, F12, etc.
        if (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'p')) {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }

        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }

        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }

        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable print screen (limited effectiveness)
    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            showCopyProtectionMessage();
        }
    });

    // Add CSS to prevent text selection
    const style = document.createElement('style');
    style.textContent = `
        .book-content {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
        }

        .book-content::selection {
            background: transparent;
        }

        .book-content::-moz-selection {
            background: transparent;
        }
    `;
    document.head.appendChild(style);
}

function showCopyProtectionMessage() {
    if (window.showNotification) {
        window.showNotification('Content is protected. Please purchase the book to access all features.', 'error');
    } else {
        alert('This content is protected. Please purchase the book to access all features.');
    }
}

// Initialize reading interface
function initializeReadingInterface() {
    loadChapter(currentChapter);
    updateChapterInfo();
    updateProgressBar();

    // Set initial font size
    const content = document.getElementById('book-content');
    if (content) {
        content.style.fontSize = fontSize + 'px';
    }
}

// Load chapter content
function loadChapter(chapterNumber) {
    const bookContentDiv = document.getElementById('book-content');
    const chapter = bookContent.chapters.find(ch => ch.id === chapterNumber);

    if (chapter && bookContentDiv) {
        bookContentDiv.innerHTML = chapter.content;

        // Add fade-in animation
        bookContentDiv.style.opacity = '0';
        setTimeout(() => {
            bookContentDiv.style.opacity = '1';
        }, 100);

        // Update navigation buttons
        updateNavigationButtons();
        updateChapterInfo();
        updateProgressBar();

        // Scroll to top of content
        bookContentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Navigation functions
function nextChapter() {
    if (currentChapter < bookContent.totalChapters) {
        if (currentChapter < bookContent.chapters.length) {
            currentChapter++;
            loadChapter(currentChapter);
        } else {
            // Show purchase message for locked chapters
            showPurchaseMessage();
        }
    }
}

function previousChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        loadChapter(currentChapter);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) {
        prevBtn.disabled = currentChapter === 1;
    }

    if (nextBtn) {
        if (currentChapter >= bookContent.chapters.length) {
            nextBtn.textContent = 'Buy Full Book';
            nextBtn.onclick = () => window.location.href = 'buy.html';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
            nextBtn.onclick = nextChapter;
        }
    }
}

function updateChapterInfo() {
    const chapterInfo = document.getElementById('chapter-info');
    if (chapterInfo) {
        chapterInfo.textContent = `Chapter ${currentChapter} of ${bookContent.totalChapters}`;
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progress = (currentChapter / bookContent.totalChapters) * 100;
        progressFill.style.width = progress + '%';
    }
}

// Font size controls
function increaseFontSize() {
    if (fontSize < 24) {
        fontSize += 2;
        updateFontSize();
    }
}

function decreaseFontSize() {
    if (fontSize > 14) {
        fontSize -= 2;
        updateFontSize();
    }
}

function updateFontSize() {
    const content = document.getElementById('book-content');
    if (content) {
        content.style.fontSize = fontSize + 'px';
    }

    // Save preference
    localStorage.setItem('bookFontSize', fontSize);
}

// Dark mode toggle
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // Save preference
    localStorage.setItem('bookDarkMode', isDarkMode);
}

// Load saved preferences
function loadPreferences() {
    const savedFontSize = localStorage.getItem('bookFontSize');
    const savedDarkMode = localStorage.getItem('bookDarkMode');

    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
        updateFontSize();
    }

    if (savedDarkMode === 'true') {
        isDarkMode = true;
        toggleDarkMode();
    }
}

// Show purchase message
function showPurchaseMessage() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Get the Complete Book on Amazon</h2>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <div style="text-align: center; padding: 2rem;">
                    <i class="fab fa-amazon" style="font-size: 3rem; color: #FF9900; margin-bottom: 1rem;"></i>
                    <h3>Available on Amazon</h3>
                    <p>You've reached the end of the free preview. Get the complete ${bookContent.totalPages}-page book with all ${bookContent.totalChapters} chapters on Amazon.</p>

                    <div style="margin: 2rem 0;">
                        <h4>What you'll get:</h4>
                        <ul style="text-align: left; max-width: 300px; margin: 0 auto;">
                            <li>✓ All ${bookContent.totalChapters} complete chapters</li>
                            <li>✓ ${bookContent.totalPages} pages of expert guidance</li>
                            <li>✓ Practical exercises and examples</li>
                            <li>✓ Lifetime access to your purchase</li>
                            <li>✓ Read on any device</li>
                        </ul>
                    </div>

                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                        <a href="${bookContent.amazonSoftCopyLink}" target="_blank" class="btn btn-primary">
                            <i class="fab fa-amazon"></i> Kindle Edition
                        </a>
                        <a href="${bookContent.amazonHardCopyLink}" target="_blank" class="btn btn-secondary">
                            <i class="fas fa-book"></i> Paperback
                        </a>
                        <button onclick="this.closest('.modal').remove()" class="btn btn-outline">
                            Continue Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Initialize preferences when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
});

// Export functions for global access
window.nextChapter = nextChapter;
window.previousChapter = previousChapter;
window.increaseFontSize = increaseFontSize;
window.decreaseFontSize = decreaseFontSize;
window.toggleDarkMode = toggleDarkMode;