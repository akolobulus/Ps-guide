// Book content and reading functionality with copy protection
// Contains the book chapters and reading interface controls

// Book content data
const bookContent = {
    title: "Simplest Guide to Public Speaking",
    author: "Favour Ebi Dakoru",
    totalPages: 250, // Update this with actual page count from your PDF
    totalChapters: 12, // Update this with actual chapter count from your PDF
    amazonSoftCopyLink: "https://amazon.com/dp/YOUR_KINDLE_ASIN", // Replace with actual Amazon Kindle link
    amazonHardCopyLink: "https://amazon.com/dp/YOUR_PAPERBACK_ASIN", // Replace with actual Amazon paperback link
    chapters: [
        {
            id: 1,
            title: "Introduction to Public Speaking", // Update with actual chapter title
            content: `
                <h2>Chapter 1: Introduction to Public Speaking</h2>
                
                <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p><strong>📖 Preview Chapter</strong> - This is a sample from the actual book content.</p>
                </div>
                
                <h3>The Power of Effective Communication</h3>
                <p>In today's fast-paced world, the ability to communicate effectively is more crucial than ever. Whether you're addressing a boardroom, speaking at a conference, or presenting to your community, your voice has the power to inspire, influence, and create lasting change...</p>
                
                <p><em>[This is just a preview. The complete chapter contains detailed insights, practical exercises, and proven techniques.]</em></p>
                
                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Book</h3>
                    <p>To read the full chapter and access all ${bookContent.totalPages} pages of expert guidance:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="${bookContent.amazonSoftCopyLink}" target="_blank" class="btn btn-primary">
                            📱 Kindle Edition on Amazon
                        </a>
                        <a href="${bookContent.amazonHardCopyLink}" target="_blank" class="btn btn-secondary">
                            📖 Paperback on Amazon
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Conquering Fear and Building Confidence", // Update with actual chapter title
            content: `
                <h2>Chapter 2: Conquering Fear and Building Confidence</h2>
                
                <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p><strong>📖 Preview Chapter</strong> - This is a sample from the actual book content.</p>
                </div>
                
                <h3>Understanding the Fear Factor</h3>
                <p>Fear of public speaking affects millions worldwide, but it doesn't have to control your life. In this chapter, you'll discover the root causes of speaking anxiety and learn proven techniques to transform fear into confidence...</p>
                
                <h3>The Three Pillars of Confidence</h3>
                <p>Through years of research and practice, I've identified three fundamental pillars that support unshakeable speaking confidence:</p>
                <ul>
                    <li>Mental Preparation and Mindset Mastery</li>
                    <li>Physical Techniques for Calm and Control</li>
                    <li>Practical Skills and Systematic Practice</li>
                </ul>
                
                <p><em>[This preview shows just the beginning. The complete chapter includes detailed exercises, case studies, and step-by-step confidence-building strategies.]</em></p>
                
                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Get the Complete Book</h3>
                    <p>To read the full chapter and access all ${bookContent.totalPages} pages of expert guidance:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="${bookContent.amazonSoftCopyLink}" target="_blank" class="btn btn-primary">
                            📱 Kindle Edition on Amazon
                        </a>
                        <a href="${bookContent.amazonHardCopyLink}" target="_blank" class="btn btn-secondary">
                            📖 Paperback on Amazon
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            title: "Building Confidence (Preview Only)",
            content: `
                <h2>Chapter 3: Building Confidence</h2>
                
                <h3>Preview Chapter</h3>
                <p>This chapter covers essential techniques for building unshakeable confidence as a public speaker. You'll learn:</p>
                
                <ul>
                    <li>How to develop a confident mindset</li>
                    <li>Physical techniques to project confidence</li>
                    <li>Practice methods that build real confidence</li>
                    <li>How to handle unexpected situations with grace</li>
                    <li>Building long-term speaking confidence</li>
                </ul>
                
                <p><strong>To read the complete chapter and access all 12 chapters, please <a href="buy.html">purchase the full book</a>.</strong></p>
                
                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>Get the Complete Book</h3>
                    <p>Unlock all 12 chapters plus bonus materials including:</p>
                    <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
                        <li>✓ Complete chapter content</li>
                        <li>✓ Practical exercises and worksheets</li>
                        <li>✓ Speech templates and examples</li>
                        <li>✓ Lifetime access to updates</li>
                    </ul>
                    <a href="buy.html" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 2rem; background: #D7263D; color: white; text-decoration: none; border-radius: 8px;">Buy Now</a>
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
