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
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Discovering Your Personal Style and Magnetic Presence</h3>

                <p>In the vibrant streets of Nigeria, where voices rise above the din of traffic and marketplaces pulse with stories, charisma stands as a force more powerful than a microphone. The most memorable speakers aren't always those with the deepest vocabulary or the most degrees; they are those who can command a room, light up a crowd, and leave an imprint on every heart that listens. This is the essence of the Law of Charisma.</p>

                <p>Charisma is not a gimmick. It is a blend of authenticity, passion, presence, and personal expression. It cannot be mimicked; it must be cultivated. If you've ever watched Pastor E.A. Adeboye, you'll notice how calm and soft-spoken he is, yet his presence alone can silence a crowd of thousands. On the other hand, someone like Dr. Paul Enenche bursts with fire, passion, and vivid expression, moving his audience with energy and conviction. Both are charismatic, yet their styles are worlds apart. This underscores one truth: charisma is not a personality type; it is a personality expressed.</p>

                <h3>The Silent Language of Connection</h3>
                <p>Let me take you to a moment in the University of Lagos where I once attended a public speaking engagement. There was this one speaker, Ijeoma, who stepped on stage with no notes, just a confident smile and her Ankara blouse radiating color. She started with a question:</p>

                <p><em>"Have you ever been told you're too much?"</em></p>

                <p>The hall erupted in laughter, especially from the students who knew what it meant to be misunderstood. In just seconds, she had everyone hooked. Why? Her energy was contagious, her expressions alive, and her confidence unwavering. That day, she didn't just win the heart of the audience; she won our respect.</p>

                <p>Charisma draws people in. It makes the audience feel something—a connection, a spark, a pull that goes beyond words. In public speaking, it is not enough to just talk. You must speak in a way that your presence alone becomes memorable. This is where passion plays a pivotal role. When you talk about something you care deeply about, it shows. Your eyes light up, your voice carries rhythm, and your energy fills the room.</p>

                <h3>Finding Your Authentic Voice</h3>
                <p>Think about your favorite Nigerian musician. Maybe it's Burna Boy, Asa, or Davido. When they perform, they aren't just singing lyrics. They are sharing an experience. The same principle applies to speaking. Your audience is not looking for perfection; they are looking for passion.</p>

                <p>But let's be real—charisma is not all hype and high energy. It's also in the quiet strength of your character. It's in how you treat your audience before and after your talk. It's in the way you carry yourself, the respect you show, the stories you tell, and the values you uphold. During a conference in Ikeja, I watched a guest speaker walk into the room 15 minutes early. He wasn't announced yet, but he greeted the ushers, smiled at a janitor, and even helped arrange chairs. When it was time for him to speak, he didn't need an introduction. The audience was already won over. That's charisma—when who you are aligns with what you say.</p>

                <h3>Discovering Your Charismatic Style</h3>
                <p>Discovering your charisma means knowing yourself. Are you the humorous type, like Ali Baba or Bovi, who can wrap deep truths in laughter? Or are you the poetic type, like Chimamanda Ngozi Adichie, whose calm and precise delivery pierces minds and moves hearts? The key is not to copy anyone blindly but to borrow brilliance while finding your own voice.</p>

                <p>Let me share a story from the University of Lagos. A guest lecturer was invited to speak on entrepreneurship. He came in dressed simply, without much flair. Some students underestimated him. But when he began, he shared his journey from selling recharge cards at Surulere to owning a logistics company with over 30 staff. His honesty, humility, and humor transformed the atmosphere. The students laughed, asked questions, and even lined up for selfies afterward. What made the difference? Charisma grounded in authenticity.</p>

                <h3>Tips to Grow Your Charisma</h3>
                <p>Charisma is your superpower. It helps you connect, communicate, and compel. Whether you are a student leader, a teacher, a pastor, or a business executive, your influence will multiply when people can feel your heart through your words.</p>

                <p>Here are a few tips to grow in charisma:</p>
                <ol>
                    <li><strong>Know your story:</strong> Share real-life experiences. People connect with people, not robots.</li>
                    <li><strong>Embrace your energy:</strong> Speak with passion. Be enthusiastic about your subject.</li>
                    <li><strong>Master your body language:</strong> Eye contact, gestures, and posture can communicate more than words.</li>
                    <li><strong>Develop emotional intelligence:</strong> Read the room. Respond with empathy. Adjust your tone.</li>
                    <li><strong>Be approachable:</strong> Smile, listen, and be kind. The way you make people feel is part of your charisma.</li>
                </ol>

                <p>Remember, in Nigeria, we don't just listen with our ears; we listen with our hearts, our eyes, and even our body language. Your charisma is what brings your message to life. It's what makes a teacher unforgettable, a pastor magnetic, a lecturer engaging, and a student speaker admired.</p>

                <p>In the end, the Law of Charisma teaches us that people may forget what you said, but they will never forget how you made them feel. So speak with fire, walk with grace, and let your presence tell your story before your words even begin.</p>

                <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                    <h4 style="color: #2d5a2d; margin-bottom: 1rem;"><i class="fas fa-clipboard-check"></i> ACTION STEP</h4>
                    <p style="margin-bottom: 0;">Grab a notebook or open a note-taking app on your phone. Throughout the day, jot down moments where you felt particularly confident or charismatic. It could be during a conversation, a meeting, or even while presenting an idea. Be specific about what made you feel that way and note down any feedback you received. This exercise will help you become more aware of your natural charisma and identify areas for improvement.</p>
                </div>

                <div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                    <h4 style="color: #856404; margin-bottom: 1rem;"><i class="fas fa-heart"></i> CONFIDENCE BOOST</h4>
                    <p style="margin-bottom: 0;">Find a quiet space with a mirror. Spend just a few minutes practicing confident body language. Stand tall, with your shoulders back and head held high. Practice making eye contact with your reflection, and experiment with different gestures and facial expressions. Notice how these small adjustments can make you feel more confident and charismatic. Keep refining your body language until it feels natural and effortless.</p>
                </div>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Continue Your Journey</h3>
                    <p>You've learned about The Law of Charisma. Continue reading to master all 6 laws:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Get the Complete Book
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
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Your Silent Message Before You Speak</h3>

                <p>Being a presenter or public speaker, your appearance is the initial silent dialogue with your audience. Before you utter a single word, your audience has already formed a perception based on how you look. Your attire, grooming, and overall presentation echo volumes about your professionalism, your preparation, and even your personality. This non-verbal language is powerful, and it can either reinforce your message or distract from it. Thus, understanding and mastering the law of dress code is a crucial component of every speaker's toolkit.</p>

                <h3>The Strategic Power of Appearance</h3>
                <p>Your clothing is not merely fabric draped over your body. It is a strategic communication tool. Every time you step on stage or in front of a camera, you're entering a contract with your audience. They are granting you their time and attention, and in return, they expect value—not just in words, but in presence.</p>

                <p>Respecting the event's dress code is your first nod to the occasion's importance. It shows that you understand the tone, the culture, and the expectations. Whether it's a corporate event, a youth seminar, a religious gathering, or a community town hall, dressing in alignment with the context signals your sensitivity and readiness. When in doubt, it's better to be slightly overdressed than underdressed. It communicates that you care.</p>

                <h3>Dressing for the Audience</h3>
                <p>One of the most overlooked aspects of speaking preparation is researching your audience. You wouldn't wear a flashy, sequined jacket to a conservative business meeting or show up in a three-piece suit to speak to high school students. Your audience's age, profession, social background, and even cultural context should influence your wardrobe choices.</p>

                <p>If you're speaking to young entrepreneurs, a smart casual outfit with clean sneakers and a stylish jacket may resonate more. If it's a panel at a financial institution, a well-fitted suit with a conservative tie is more appropriate. Think of your clothing as a bridge, helping your message cross over from your mind to theirs.</p>

                <h3>The Environment Matters</h3>
                <p>Environmental factors must be considered. Will the event be held indoors or outdoors? Is the venue air-conditioned or open-air? Will you be on an elevated stage or on the same level as your audience? What is the weather forecast? These questions are not trivial; they influence comfort, movement, and perception.</p>

                <p>An outdoor event in Nigeria at noon under the blazing sun requires light, breathable fabrics, preferably in brighter colors. You don't want to be drenched in sweat before the first applause. Conversely, speaking in a chilly, air-conditioned hall might require layering with a blazer or sweater. Your comfort translates to confidence. If you're fidgeting with your outfit or adjusting your sleeves mid-sentence, your audience notices.</p>

                <h3>Dress Code Beyond Clothing</h3>
                <p>Dress code extends beyond garments. Your hairstyle, accessories, grooming, and even scent matter. A clean, neat hairstyle suggests discipline and personal care. Avoid extravagant styles unless they align with the brand you're portraying or the audience you're addressing.</p>

                <p>For both men and women, moderation is key. Ladies, minimal jewelry that complements rather than competes with your message is ideal. Gentlemen, your belt should match your shoes, and avoid over-accessorizing with chains or flashy cufflinks.</p>

                <h3>The Art of Color Coordination</h3>
                <p>Colors communicate emotions. Bright colors often exude energy and positivity, while dark colors signify authority and formality. Understanding how colors blend is essential. For men, a vibrant shirt paired with black or navy pants and a tie that is slightly darker than the shirt creates a visually balanced ensemble. Avoid an all-black outfit unless you're going for a specific dramatic effect. Even the iconic Men in Black knew the value of contrast—they wore white shirts under their black suits for a reason. (Chuckles)</p>

                <p>For women, bold colors can be empowering when used thoughtfully. A red blazer, for instance, conveys confidence. Pastel tones can evoke warmth and approachability. Avoid clashing colors unless you're a style icon who knows how to own it. The goal is not to distract, but to enhance.</p>

                <h3>Grooming and the Power of Scent</h3>
                <p>Personal grooming is non-negotiable. Your nails, breath, and general hygiene speak before your words do. A subtle fragrance adds an extra layer of charm. It's a small detail, but a pleasant scent can uplift spirits, especially if you're speaking at a long, exhausting event. But be mindful—go easy on the cologne or perfume. You want to leave a memory, not a headache.</p>

                <p>For men, a clean shave or well-maintained beard makes a difference. For women, neatly styled hair and light makeup (if used) can create a polished, professional look. These touches build trust and show that you took time to prepare for your audience.</p>

                <h3>Footwear: The Unsung Hero</h3>
                <p>Never underestimate the power of good shoes. Your shoes tell a story of how far you've walked, how seriously you take yourself, and how you approach life. Shiny, well-kept, and comfortable footwear is more than a finishing touch; it is a cornerstone of your presentation.</p>

                <p>Imagine wearing stylish shoes that hurt your feet. Halfway through your talk, you're shifting your weight, wincing slightly. That discomfort becomes a distraction. On the other hand, a clean, comfortable pair of shoes boosts your posture, keeps you grounded, and gives you that final layer of confidence. Think of your shoes as your foundation. Build strong.</p>

                <h3>Intention in Every Thread</h3>
                <p>As you step onto that stage, remember that your attire is not an afterthought. It is part of the performance. Your look should say: "I respect you. I respect this moment. I am ready." Whether you're standing before five people or five thousand, show up with intention.</p>

                <p>There is a story told about a young speaker who once showed up at a CEO summit in a rumpled shirt and worn-out shoes. Despite the brilliance of his ideas, the audience's takeaway was: "He wasn't ready." Contrast this with another speaker who wore a modest, sharp outfit, carried herself with poise, and spoke with clarity. The response? "She looked the part, and she played it well."</p>

                <p>The law of dress code is not about vanity. It's about value. It is about showing up with the excellence your message deserves. It's about visual alignment with your verbal expression. When you honor this law, your audience sees a speaker who is not just heard but seen—with intention and care. And that, my friend, is unforgettable.</p>

                <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                    <h4 style="color: #2d5a2d; margin-bottom: 1rem;"><i class="fas fa-clipboard-check"></i> ACTION STEP</h4>
                    <p style="margin-bottom: 0;">Create a vision board or Pinterest board showcasing your ideal speaking attire, considering factors such as venue, audience, and personal style.</p>
                </div>

                <div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                    <h4 style="color: #856404; margin-bottom: 1rem;"><i class="fas fa-tshirt"></i> WARDROBE ASSESSMENT</h4>
                    <p style="margin-bottom: 0;">Take some time to assess your current wardrobe and identify pieces that align with professional speaking engagements. Make any necessary additions or adjustments.</p>
                </div>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>📚 Almost There!</h3>
                    <p>You've mastered 5 out of 6 laws. Complete your journey with the final law:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Get the Complete Book
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
                <h3 style="color: var(--secondary-color); margin-bottom: 2rem;">Because Every Second Counts on Stage and in Life</h3>

                <blockquote style="font-style: italic; font-size: 1.2rem; color: var(--primary-color); margin: 2rem 0; padding: 1rem; border-left: 4px solid var(--accent-color);">
                    "Success is where preparation and opportunity meet." — Bobby Unser
                </blockquote>

                <p>There's a powerful truth that separates the good from the great, the average from the exceptional, and the unprepared from the unforgettable. That truth is preparation. If you want to become a remarkable public speaker, someone who holds people's attention, moves hearts, and influences minds, then you must understand and embrace The Law of Preparation.</p>

                <p>Let's start with a simple question: If you were called upon today to speak in front of a thousand people, are you ready? Would you be able to confidently walk up, own the stage, and deliver something memorable? Most people would panic. But why? Because deep down, they know they haven't prepared.</p>

                <h3>Preparation is the Foundation of Confidence</h3>
                <p>Have you ever watched a student walk into an exam hall with a smile, sitting with shoulders squared, already certain of their victory? That's the power of preparation. The opposite is also true—if you've ever gone into a test without studying, you know the feeling: shaky hands, a racing heart, a foggy mind.</p>

                <p>It's the same with public speaking. When you've taken the time to prepare—your message, your mindset, and your materials—you'll feel unstoppable. Preparation eliminates fear and replaces it with confidence.</p>

                <p>Think of a pastor stepping up on Sunday morning to deliver a sermon. If that pastor has studied the scriptures, prayed, and thought deeply about the message for the congregation, something powerful happens. Their words carry weight. Their delivery flows naturally. The Spirit backs their preparation.</p>

                <p>Executives also know this well. Before any boardroom presentation or pitch to investors, they review data, rehearse their talking points, anticipate questions, and sometimes even role-play with team members. They don't "wing it" because they know what's at stake.</p>

                <p>The same principle applies whether you're speaking at a school assembly, preaching in church, or pitching a business idea—those who prepare are the ones who prevail.</p>

                <h3>Preparation is Like Farming</h3>
                <p>Let's borrow a timeless analogy. Imagine you are a farmer. You want a great harvest. What do you do? Do you sit back and pray that your land magically yields crops? Of course not. You till the soil, you plant seeds, you water consistently, and you protect your field from pests.</p>

                <p>Public speaking is no different. Your words are your seeds. The audience is your soil. Your preparation is the process of planting, watering, and nurturing. And just like the farmer, you cannot expect a harvest if you skip the process.</p>

                <p>Many people admire great speakers and say, "Wow, they're so gifted." But what they don't see is the hours spent practicing in front of mirrors, recording and re-recording voice notes, researching content, and rehearsing over and over again. That's the part most people want to skip, and yet, it's where the power lies.</p>

                <h3>Mental Rehearsal: Your Inner Stage</h3>
                <p>Now, preparation is not just about memorizing lines or slides. It also involves preparing your mind and emotions. This is where mental rehearsal becomes your secret weapon.</p>

                <p>Picture this: a professional footballer doesn't just train on the field. They also visualize the match the night before, imagining the crowd, the goals, the passes. Similarly, if you want to perform excellently on stage, begin by seeing yourself doing it.</p>

                <p>Close your eyes. Imagine the room. Hear the applause. Feel your heartbeat steady. See yourself walking to the microphone with ease. Hear your voice sounding clear and strong. See people leaning in to listen. Visualize them nodding, laughing at your jokes, writing down your key points. That inner movie prepares your emotions for the real event.</p>

                <p>This technique is used by athletes, actors, soldiers, and top executives. Why not you? The stage is first conquered in the mind before it's conquered in reality.</p>

                <h3>Small Details Make a Big Difference</h3>
                <p>It's not just the big moments that count. Sometimes, the little things determine whether a presentation is great or just average.</p>

                <ul>
                    <li>Have you checked if your slide font is readable from the back row?</li>
                    <li>Do your examples make sense to your specific audience?</li>
                    <li>Is your attire appropriate and confidence-boosting?</li>
                    <li>Have you timed your speech to avoid rushing or dragging?</li>
                    <li>Do you know the first sentence you'll say the moment you get the mic?</li>
                </ul>

                <p>Think of preparation like setting the table for a banquet. You could cook the most delicious meal, but if the plates are dirty or the table is wobbly, your guests won't enjoy it. Great speakers sweat the small stuff, and that's what separates them.</p>

                <h3>The Unexpected is Inevitable—Prepare Anyway</h3>
                <p>Let's be honest. Even with the best preparation, unexpected things can happen. The mic might stop working. Your slides might freeze. Someone may interrupt. But guess what? The better prepared you are, the easier it is to adapt.</p>

                <p>Preparation gives you flexibility. It gives you the confidence to say, "No problem, I've got this." The speaker who has practiced well can adjust to anything without losing their cool. They may even gain extra respect for their composure.</p>

                <p>Remember David in the Bible? Before he faced Goliath, he had already been practicing in the wilderness, slaying lions and bears. That battle wasn't his first rodeo—it was the result of years of preparation. Goliath just happened to be the stage.</p>

                <h3>Success is Predictable When You Prepare</h3>
                <p>Let's break it down.</p>

                <ul>
                    <li>A student who prepares doesn't fear exams.</li>
                    <li>A pastor who prepares carries a deeper anointing in their message.</li>
                    <li>An executive who prepares earns respect and influence in the boardroom.</li>
                    <li>A public speaker who prepares captivates and connects.</li>
                </ul>

                <p>Don't wait for your "big moment" to start getting ready. By then, it might be too late. Instead, prepare like every day is your audition, and every audience is your opportunity.</p>

                <h3>Final Thoughts: Start Today</h3>
                <p>Preparation doesn't make you perfect, but it positions you for excellence. You may not control the size of the audience, the lighting in the room, or the type of microphone. But you can control your readiness.</p>

                <p>Great speakers are not born. They are built—through discipline, through practice, and through thoughtful, consistent preparation.</p>

                <p>So, whether you're standing before a classroom, a congregation, or a conference crowd, never forget:</p>

                <p style="text-align: center; font-size: 1.2rem; color: var(--primary-color); font-weight: 600; margin: 2rem 0;">
                    The more you sweat in preparation, the less you'll bleed in performance.
                </p>

                <p>Now, ask yourself: What am I doing today to prepare for the opportunity I say I want tomorrow?</p>

                <p>Because when preparation meets opportunity, that's when greatness shows up.</p>

                <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                    <h4 style="color: #2d5a2d; margin-bottom: 1rem;"><i class="fas fa-clipboard-check"></i> ACTION STEP</h4>
                    <p style="margin-bottom: 0;">Take a deep breath and close your eyes. Set aside just a few moments for this visualization exercise. Picture yourself standing confidently in front of your audience, delivering a successful presentation. Imagine the room filled with engaged listeners, nodding along and hanging onto your every word. Feel the confidence radiating from within you as you speak with clarity and conviction. Notice the positive energy flowing through you, and envision the audience responding enthusiastically to your message.</p>
                </div>

                <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've completed all 6 Laws of Public Speaking. Continue your journey with the complete book:</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                        <a href="buy.html" class="btn btn-primary">
                            📖 Get the Complete Book
                        </a>
                        <a href="testimonials.html" class="btn btn-secondary">
                            💬 Read Testimonials
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