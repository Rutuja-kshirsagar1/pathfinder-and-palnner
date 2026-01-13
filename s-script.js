  // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        
        // Roadmap elements
        const roadmapForm = document.getElementById('roadmapForm');
        const roadmapLoader = document.getElementById('roadmapLoader');
        const roadmapResults = document.getElementById('roadmapResults');
        const roadmapSummary = document.getElementById('roadmapSummary');
        const roadmapTimeline = document.getElementById('roadmapTimeline');
        const skillProgress = document.getElementById('skillProgress');
        const aiRecommendations = document.getElementById('aiRecommendations');
        
        // Planner elements
        const plannerForm = document.getElementById('plannerForm');
        const plannerLoader = document.getElementById('plannerLoader');
        const plannerResults = document.getElementById('plannerResults');
        const studyPlanOverview = document.getElementById('studyPlanOverview');
        const studyPlanResult = document.getElementById('studyPlanResult');
        const studyTips = document.getElementById('studyTips');
        const examDateInput = document.getElementById('examDate');
        const setExamDateBtn = document.getElementById('setExamDateBtn');
        const countdownDisplay = document.getElementById('countdownDisplay');
        const countdownDays = document.getElementById('days');
        const countdownHours = document.getElementById('hours');
        const countdownMinutes = document.getElementById('minutes');
        const countdownSeconds = document.getElementById('seconds');
        
        // Set default exam date to 30 days from now
        const defaultExamDate = new Date();
        defaultExamDate.setDate(defaultExamDate.getDate() + 30);
        examDateInput.valueAsDate = defaultExamDate;
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
        
        // Navigation between pages
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Show target page
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === `${targetPage}-page`) {
                        page.classList.add('active');
                    }
                });
                
                // Hide mobile menu on selection
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                }
            });
        });
        
        // Comprehensive roadmap data for different domains
        const roadmapData = {
            'software': {
                name: 'Software Engineering',
                year1: {
                    sem1: [
                        'Master programming fundamentals (variables, loops, conditionals)',
                        'Learn Python/Java basics (complete at least 50 coding exercises)',
                        'Understand basic algorithms (sorting, searching)',
                        'Join coding clubs and participate in hackathons',
                        'Build simple console applications (calculator, to-do list)'
                    ],
                    sem2: [
                        'Learn Object-Oriented Programming concepts',
                        'Study Data Structures (arrays, linked lists, stacks, queues)',
                        'Introduction to web development (HTML, CSS, JavaScript)',
                        'Complete 2-3 small projects for portfolio',
                        'Start building GitHub profile with regular commits'
                    ]
                },
                year2: {
                    sem1: [
                        'Advanced Data Structures (trees, graphs, hash tables)',
                        'Learn Database Management Systems (SQL, NoSQL basics)',
                        'Study operating systems and computer networks fundamentals',
                        'Build full-stack web application with frontend and backend',
                        'Participate in open-source contributions'
                    ],
                    sem2: [
                        'Master backend development (Node.js/Python Django/Java Spring)',
                        'Learn software engineering principles (SDLC, Agile, Testing)',
                        'Study system design basics',
                        'Complete internship or major project',
                        'Prepare for technical interviews (leetcode practice)'
                    ]
                },
                year3: {
                    sem1: [
                        'Specialize in a domain (web, mobile, cloud, AI/ML)',
                        'Learn advanced algorithms (dynamic programming, graph algorithms)',
                        'Study distributed systems and microservices',
                        'Build complex full-stack application with deployment',
                        'Network with professionals on LinkedIn'
                    ],
                    sem2: [
                        'Secure summer internship at tech company',
                        'Master system design and architecture patterns',
                        'Contribute significantly to open-source projects',
                        'Prepare for full-time job interviews',
                        'Create comprehensive portfolio website'
                    ]
                },
                year4: {
                    sem1: [
                        'Job search: Apply to 50+ companies',
                        'Master behavioral interview techniques',
                        'Negotiate job offers and compensation packages',
                        'Complete capstone project showcasing all skills',
                        'Network with alumni in target companies'
                    ],
                    sem2: [
                        'Transition to professional software engineer role',
                        'Continue learning through online courses and certifications',
                        'Establish mentorship relationships',
                        'Plan career growth path (promotions, specialization)',
                        'Begin professional development in chosen specialty'
                    ]
                },
                skills: ['Programming', 'Data Structures', 'Algorithms', 'System Design', 'Databases', 'Web Development', 'Software Architecture', 'Testing', 'DevOps', 'Cloud Computing']
            },
            'data': {
                name: 'Data Science & Analytics',
                year1: {
                    sem1: [
                        'Master mathematics fundamentals (calculus, linear algebra)',
                        'Learn Python programming basics with focus on data manipulation',
                        'Study basic statistics and probability',
                        'Learn Excel for data analysis (advanced functions, pivot tables)',
                        'Complete introductory data visualization projects'
                    ],
                    sem2: [
                        'Learn SQL for database querying',
                        'Study Python libraries: NumPy and Pandas',
                        'Understand basic machine learning concepts',
                        'Complete data cleaning and preprocessing projects',
                        'Build simple predictive models'
                    ]
                },
                year2: {
                    sem1: [
                        'Advanced statistics (hypothesis testing, regression analysis)',
                        'Master data visualization with Matplotlib, Seaborn, Plotly',
                        'Learn data wrangling techniques',
                        'Study database management systems',
                        'Complete exploratory data analysis projects'
                    ],
                    sem2: [
                        'Machine learning algorithms (supervised and unsupervised)',
                        'Learn data mining techniques',
                        'Study big data concepts',
                        'Work on Kaggle competitions',
                        'Build portfolio with diverse datasets'
                    ]
                },
                year3: {
                    sem1: [
                        'Deep learning fundamentals (neural networks, TensorFlow/PyTorch)',
                        'Study natural language processing or computer vision',
                        'Learn cloud platforms for data science (AWS, GCP, Azure)',
                        'Complete end-to-end data science project',
                        'Secure data science internship'
                    ],
                    sem2: [
                        'Advanced machine learning techniques',
                        'Study ML deployment and MLOps',
                        'Learn data engineering concepts',
                        'Prepare for data science interviews',
                        'Network with data professionals'
                    ]
                },
                year4: {
                    sem1: [
                        'Specialize in domain (finance, healthcare, marketing analytics)',
                        'Master business intelligence tools (Tableau, Power BI)',
                        'Study advanced statistical modeling',
                        'Complete capstone project solving real business problem',
                        'Apply for full-time positions'
                    ],
                    sem2: [
                        'Transition to data scientist/analyst role',
                        'Continue learning through certifications',
                        'Establish professional network',
                        'Plan career advancement path',
                        'Contribute to data science community'
                    ]
                },
                skills: ['Python', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization', 'Data Wrangling', 'Big Data', 'Deep Learning', 'Business Intelligence', 'Cloud Computing']
            }
        };
        
        // Roadmap form submission
        roadmapForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const currentYear = document.getElementById('currentYear').value;
            const domain = document.getElementById('domain').value;
            const duration = document.getElementById('duration').value;
            const skills = document.getElementById('skills').value;
            const goals = document.getElementById('goals').value;
            const university = document.getElementById('university').value;
            
            // Show loader
            roadmapLoader.style.display = 'block';
            roadmapResults.style.display = 'none';
            
            // Simulate AI processing delay
            setTimeout(() => {
                generateComprehensiveRoadmap(currentYear, domain, duration, skills, goals, university);
                roadmapLoader.style.display = 'none';
                roadmapResults.style.display = 'block';
                
                // Scroll to results
                roadmapResults.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        });
        
        // Generate comprehensive roadmap function
        function generateComprehensiveRoadmap(currentYear, domain, duration, skills, goals, university) {
            // Domain names mapping
            const domainNames = {
                'software': 'Software Engineering',
                'data': 'Data Science & Analytics',
                'finance': 'Finance & Banking',
                'marketing': 'Marketing & Digital Marketing',
                'healthcare': 'Healthcare & Medicine',
                'design': 'Design & UI/UX',
                'business': 'Business & Entrepreneurship',
                'engineering': 'Engineering',
                'research': 'Research & Academia'
            };
            
            // Year names mapping
            const yearNames = {
                '1': 'First Year',
                '2': 'Second Year',
                '3': 'Third Year',
                '4': 'Fourth Year',
                '5': 'Fifth Year'
            };
            
            // Clear previous content
            roadmapTimeline.innerHTML = '';
            roadmapSummary.innerHTML = '';
            skillProgress.innerHTML = '';
            aiRecommendations.innerHTML = '';
            
            // Generate roadmap summary
            const summaryHTML = `
                <h4 style="color: var(--primary-color); margin-bottom: 10px;">${domainNames[domain]} Roadmap Summary</h4>
                <p style="margin-bottom: 10px;"><strong>Duration:</strong> ${duration} years | <strong>Starting Point:</strong> ${yearNames[currentYear]}</p>
                ${skills ? `<p style="margin-bottom: 10px;"><strong>Current Skills:</strong> ${skills}</p>` : ''}
                ${goals ? `<p style="margin-bottom: 10px;"><strong>Career Goals:</strong> ${goals}</p>` : ''}
                ${university ? `<p><strong>University Context:</strong> ${getUniversityContext(university)}</p>` : ''}
            `;
            roadmapSummary.innerHTML = summaryHTML;
            
            // Create comprehensive timeline based on duration
            for (let i = parseInt(currentYear); i <= parseInt(duration); i++) {
                // Create year card
                const yearCard = document.createElement('div');
                yearCard.className = 'timeline-year-card';
                
                const yearLabel = document.createElement('div');
                yearLabel.className = 'timeline-year';
                yearLabel.innerHTML = `<i class="fas fa-calendar-alt"></i> ${yearNames[i] || `Year ${i}`}`;
                
                const content = document.createElement('div');
                content.className = 'timeline-content';
                
                // Generate content based on domain and year
                const contentHTML = generateYearContent(domain, i, currentYear, skills, goals, university);
                content.innerHTML = contentHTML;
                
                yearCard.appendChild(yearLabel);
                yearCard.appendChild(content);
                roadmapTimeline.appendChild(yearCard);
            }
            
            // Generate skill progress
            const skillProgressHTML = generateSkillProgress(domain, duration);
            skillProgress.innerHTML = skillProgressHTML;
            
            // Generate AI recommendations
            const recommendationsHTML = generateAIRecommendations(domain, skills, goals, university);
            aiRecommendations.innerHTML = recommendationsHTML;
        }
        
        // Generate comprehensive year content
        function generateYearContent(domain, year, currentYear, skills, goals, university) {
            let content = '';
            
            // Get domain-specific data or use default
            const domainData = roadmapData[domain] || getDefaultDomainData(domain);
            
            if (year == 1) {
                content = `
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 1: Foundation Building</h4>
                        ${domainData.year1.sem1.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(0, 3).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 10-15 hours/week</div>
                        </div>
                    </div>
                    
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 2: Core Concepts</h4>
                        ${domainData.year1.sem2.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(3, 6).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 12-18 hours/week</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;"><i class="fas fa-star"></i> First Year Milestones</h5>
                        <ul style="padding-left: 20px;">
                            <li>Maintain GPA above 3.5/4.0</li>
                            <li>Complete at least 3 hands-on projects</li>
                            <li>Join relevant student organizations</li>
                            <li>Attend 5+ career development workshops</li>
                            <li>Build professional LinkedIn profile</li>
                        </ul>
                    </div>
                `;
            } else if (year == 2) {
                content = `
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 3: Skill Development</h4>
                        ${domainData.year2.sem1.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(4, 7).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 15-20 hours/week</div>
                        </div>
                    </div>
                    
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 4: Advanced Applications</h4>
                        ${domainData.year2.sem2.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(6, 9).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 15-22 hours/week</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;"><i class="fas fa-star"></i> Second Year Milestones</h5>
                        <ul style="padding-left: 20px;">
                            <li>Secure first internship or research position</li>
                            <li>Build portfolio with 5+ substantial projects</li>
                            <li>Network with 10+ professionals in your field</li>
                            <li>Participate in 2+ competitions or hackathons</li>
                            <li>Complete relevant online certifications</li>
                        </ul>
                    </div>
                `;
            } else if (year == 3) {
                content = `
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 5: Specialization</h4>
                        ${domainData.year3.sem1.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(5, 8).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 18-25 hours/week</div>
                        </div>
                    </div>
                    
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 6: Professional Preparation</h4>
                        ${domainData.year3.sem2.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(7, 10).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 20-30 hours/week</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;"><i class="fas fa-star"></i> Third Year Milestones</h5>
                        <ul style="padding-left: 20px;">
                            <li>Secure summer internship at target company</li>
                            <li>Build professional network of 50+ connections</li>
                            <li>Complete major capstone or research project</li>
                            <li>Master technical interview preparation</li>
                            <li>Begin full-time job applications</li>
                        </ul>
                    </div>
                `;
            } else if (year == 4) {
                content = `
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 7: Career Transition</h4>
                        ${domainData.year4.sem1.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Develop:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(8, 10).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: 25-35 hours/week</div>
                        </div>
                    </div>
                    
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Semester 8: Professional Onboarding</h4>
                        ${domainData.year4.sem2.map(item => `<div class="step-item">${item}</div>`).join('')}
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Master:</strong>
                            <div style="margin-top: 8px;">
                                ${domainData.skills.slice(0, 5).map(skill => `<span class="skill-badge">${skill} (Advanced)</span>`).join('')}
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: Full-time professional commitment</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;"><i class="fas fa-star"></i> Final Year Milestones</h5>
                        <ul style="padding-left: 20px;">
                            <li>Accept full-time job offer with target compensation</li>
                            <li>Complete degree with strong academic record</li>
                            <li>Establish professional mentorship relationships</li>
                            <li>Create 5-year career development plan</li>
                            <li>Transition successfully to professional career</li>
                        </ul>
                    </div>
                `;
            } else {
                // For extended 5-year plans
                content = `
                    <div class="semester-section">
                        <h4 class="semester-title"><i class="fas fa-book"></i> Year 5: Advanced Specialization</h4>
                        <div class="step-item">Pursue advanced certifications or graduate studies</div>
                        <div class="step-item">Develop leadership and management skills</div>
                        <div class="step-item">Build professional network of 100+ connections</div>
                        <div class="step-item">Mentor junior students or professionals</div>
                        <div class="step-item">Contribute to industry publications or conferences</div>
                        <div class="step-item">Establish thought leadership in your niche</div>
                        
                        <div style="margin-top: 15px;">
                            <strong>Key Skills to Master:</strong>
                            <div style="margin-top: 8px;">
                                <span class="skill-badge">Leadership</span>
                                <span class="skill-badge">Advanced Specialization</span>
                                <span class="skill-badge">Industry Knowledge</span>
                            </div>
                            <div class="time-estimate"><i class="fas fa-clock"></i> Estimated: Continuous professional development</div>
                        </div>
                    </div>
                `;
            }
            
            return content;
        }
        
        // Get default domain data for domains not in roadmapData
        function getDefaultDomainData(domain) {
            const defaultData = {
                name: domain.charAt(0).toUpperCase() + domain.slice(1),
                year1: {
                    sem1: [
                        'Master fundamental concepts and principles',
                        'Develop core technical skills',
                        'Build strong academic foundation',
                        'Join relevant student organizations',
                        'Network with professors and professionals'
                    ],
                    sem2: [
                        'Advance to intermediate concepts',
                        'Begin hands-on projects and applications',
                        'Develop problem-solving skills',
                        'Participate in competitions or events',
                        'Build initial portfolio'
                    ]
                },
                year2: {
                    sem1: [
                        'Specialize in key areas of interest',
                        'Develop advanced technical skills',
                        'Secure internship or research position',
                        'Build comprehensive portfolio',
                        'Network with industry professionals'
                    ],
                    sem2: [
                        'Master domain-specific tools and technologies',
                        'Complete significant project or research',
                        'Prepare for professional opportunities',
                        'Develop interview and communication skills',
                        'Establish professional online presence'
                    ]
                },
                year3: {
                    sem1: [
                        'Secure summer internship at target organization',
                        'Develop professional network',
                        'Master advanced domain concepts',
                        'Prepare for full-time career',
                        'Build leadership experience'
                    ],
                    sem2: [
                        'Apply for full-time positions',
                        'Complete capstone project',
                        'Master interview techniques',
                        'Negotiate job offers',
                        'Plan career transition'
                    ]
                },
                year4: {
                    sem1: [
                        'Transition to professional role',
                        'Continue skill development',
                        'Establish mentorship relationships',
                        'Plan career advancement',
                        'Contribute to professional community'
                    ],
                    sem2: [
                        'Excel in professional environment',
                        'Pursue advanced certifications',
                        'Build professional reputation',
                        'Mentor others',
                        'Plan long-term career growth'
                    ]
                },
                skills: ['Core Fundamentals', 'Technical Skills', 'Problem Solving', 'Communication', 'Project Management', 'Specialized Knowledge', 'Industry Tools', 'Professional Development', 'Leadership', 'Networking']
            };
            
            return defaultData;
        }
        
        // Get university context
        function getUniversityContext(universityType) {
            const contexts = {
                'tier1': 'Premier institute with strong industry connections and research opportunities',
                'tier2': 'State university with good industry exposure and placement opportunities',
                'tier3': 'Private college where self-initiative and external projects are crucial',
                'online': 'Online/distance learning requiring strong self-discipline and networking'
            };
            return contexts[universityType] || 'General university context';
        }
        
        // Generate skill progress
        function generateSkillProgress(domain, duration) {
            const domainData = roadmapData[domain] || getDefaultDomainData(domain);
            let skillsHTML = '';
            
            // Create progress for 5 key skills
            const keySkills = domainData.skills.slice(0, 5);
            
            keySkills.forEach((skill, index) => {
                const completion = Math.min(20 + (index * 15) + (parseInt(duration) * 5), 95);
                
                skillsHTML += `
                    <div class="progress-card">
                        <h4><i class="fas fa-chart-bar"></i> ${skill}</h4>
                        <div style="margin-bottom: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>Progress</span>
                                <span>${completion}%</span>
                            </div>
                            <div style="height: 8px; background-color: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: ${completion}%; height: 100%; background: linear-gradient(to right, var(--primary-color), var(--accent-color)); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">
                            ${generateSkillMilestones(domain, skill, completion)}
                        </div>
                    </div>
                `;
            });
            
            return skillsHTML;
        }
        
        // Generate skill milestones
        function generateSkillMilestones(domain, skill, completion) {
            if (completion < 30) {
                return 'Focus on fundamentals and basic concepts';
            } else if (completion < 60) {
                return 'Building practical applications and projects';
            } else if (completion < 85) {
                return 'Mastering advanced concepts and real-world applications';
            } else {
                return 'Professional level - ready for industry implementation';
            }
        }
        
        // Generate AI recommendations
        function generateAIRecommendations(domain, skills, goals, university) {
            let recommendations = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
            `;
            
            // Always include these general recommendations
            recommendations += `
                <div>
                    <h5 style="color: #0369a1; margin-bottom: 8px;">🎯 Immediate Actions (Next 30 Days)</h5>
                    <ul style="padding-left: 20px; font-size: 0.9rem;">
                        <li>Complete 2 online courses in your domain fundamentals</li>
                        <li>Build 1 portfolio project showcasing current skills</li>
                        <li>Connect with 10 professionals on LinkedIn</li>
                        <li>Attend 2 virtual career events or webinars</li>
                        <li>Create study schedule for upcoming semester</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: #0369a1; margin-bottom: 8px;">📈 Medium-term Strategy (3-6 Months)</h5>
                    <ul style="padding-left: 20px; font-size: 0.9rem;">
                        <li>Secure internship or research position</li>
                        <li>Complete certification in specialized area</li>
                        <li>Build network of 50+ industry professionals</li>
                        <li>Participate in 2 competitions/hackathons</li>
                        <li>Develop mentorship relationship</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: #0369a1; margin-bottom: 8px;">🚀 Long-term Career Development</h5>
                    <ul style="padding-left: 20px; font-size: 0.9rem;">
                        <li>Achieve target GPA and academic performance</li>
                        <li>Secure full-time position with target companies</li>
                        <li>Develop leadership and management skills</li>
                        <li>Establish professional reputation in field</li>
                        <li>Create 5-year career growth plan</li>
                    </ul>
                </div>
            `;
            
            // Domain-specific recommendations
            if (domain === 'software') {
                recommendations += `
                    <div>
                        <h5 style="color: #0369a1; margin-bottom: 8px;">💻 Software Engineering Focus</h5>
                        <ul style="padding-left: 20px; font-size: 0.9rem;">
                            <li>Solve 100+ LeetCode problems</li>
                            <li>Contribute to 3+ open-source projects</li>
                            <li>Build full-stack application with deployment</li>
                            <li>Master system design concepts</li>
                            <li>Learn DevOps and cloud technologies</li>
                        </ul>
                    </div>
                `;
            } else if (domain === 'data') {
                recommendations += `
                    <div>
                        <h5 style="color: #0369a1; margin-bottom: 8px;">📊 Data Science Focus</h5>
                        <ul style="padding-left: 20px; font-size: 0.9rem;">
                            <li>Complete 5+ Kaggle competitions</li>
                            <li>Master SQL and database optimization</li>
                            <li>Build end-to-end ML pipeline project</li>
                            <li>Learn cloud ML services (AWS SageMaker, GCP AI)</li>
                            <li>Develop business storytelling with data</li>
                        </ul>
                    </div>
                `;
            }
            
            // University-specific recommendations
            if (university === 'tier3') {
                recommendations += `
                    <div>
                        <h5 style="color: #0369a1; margin-bottom: 8px;">🎓 Tier 3 College Strategy</h5>
                        <ul style="padding-left: 20px; font-size: 0.9rem;">
                            <li>Focus heavily on external projects and portfolio</li>
                            <li>Network aggressively with professionals</li>
                            <li>Consider online certifications from top institutions</li>
                            <li>Participate in national/international competitions</li>
                            <li>Build strong GitHub/LinkedIn presence</li>
                        </ul>
                    </div>
                `;
            }
            
            recommendations += '</div>';
            return recommendations;
        }
        
        // Study planner form submission
        plannerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const studyDuration = document.getElementById('studyDuration').value;
            const studyGoal = document.getElementById('studyGoal').value;
            const planType = document.getElementById('planType').value;
            const studyTopics = document.getElementById('studyTopics').value;
            const dailyHours = document.getElementById('dailyHours').value;
            const learningStyle = document.getElementById('learningStyle').value;
            
            // Show loader
            plannerLoader.style.display = 'block';
            plannerResults.style.display = 'none';
            
            // Simulate AI processing delay
            setTimeout(() => {
                generateComprehensiveStudyPlan(studyDuration, studyGoal, planType, studyTopics, dailyHours, learningStyle);
                plannerLoader.style.display = 'none';
                plannerResults.style.display = 'block';
                
                // Scroll to results
                plannerResults.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        });
        
        // Generate comprehensive study plan
        function generateComprehensiveStudyPlan(duration, goal, planType, topics, dailyHours, learningStyle) {
            // Clear previous content
            studyPlanResult.innerHTML = '';
            studyPlanOverview.innerHTML = '';
            studyTips.innerHTML = '';
            
            // Parse topics if provided
            const topicList = topics ? topics.split(',').map(topic => topic.trim()) : generateDefaultTopics(goal);
            
            // Generate study plan overview
            const totalHours = parseInt(duration) * parseInt(dailyHours);
            const overviewHTML = `
                <h4 style="color: var(--primary-color); margin-bottom: 10px;">${goal} Study Plan Overview</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 15px;">
                    <div style="background: white; padding: 12px; border-radius: 8px; min-width: 150px;">
                        <div style="font-size: 0.9rem; color: var(--text-light);">Total Duration</div>
                        <div style="font-size: 1.2rem; font-weight: 600; color: var(--primary-color);">${duration} days</div>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; min-width: 150px;">
                        <div style="font-size: 0.9rem; color: var(--text-light);">Daily Study Time</div>
                        <div style="font-size: 1.2rem; font-weight: 600; color: var(--primary-color);">${dailyHours} hours</div>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; min-width: 150px;">
                        <div style="font-size: 0.9rem; color: var(--text-light);">Total Study Hours</div>
                        <div style="font-size: 1.2rem; font-weight: 600; color: var(--primary-color);">${totalHours} hours</div>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; min-width: 150px;">
                        <div style="font-size: 0.9rem; color: var(--text-light);">Learning Style</div>
                        <div style="font-size: 1.2rem; font-weight: 600; color: var(--primary-color);">${learningStyle || 'Mixed'}</div>
                    </div>
                </div>
                ${topicList.length > 0 ? `<p style="margin-top: 15px;"><strong>Topics to Cover:</strong> ${topicList.join(', ')}</p>` : ''}
            `;
            studyPlanOverview.innerHTML = overviewHTML;
            
            // Generate study plan based on plan type
            if (planType === 'daily') {
                generateDailyStudyPlan(duration, goal, topicList, dailyHours, learningStyle);
            } else if (planType === 'weekly') {
                generateWeeklyStudyPlan(duration, goal, topicList, dailyHours, learningStyle);
            } else {
                generateMonthlyStudyPlan(duration, goal, topicList, dailyHours, learningStyle);
            }
            
            // Generate study tips
            generateStudyTips(goal, learningStyle, duration);
        }
        
        // Generate default topics based on goal
        function generateDefaultTopics(goal) {
            const topicMap = {
                'Computer Science': ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems', 'Computer Networks'],
                'Mathematics': ['Calculus', 'Linear Algebra', 'Probability', 'Statistics', 'Discrete Mathematics', 'Differential Equations'],
                'Physics': ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Quantum Physics', 'Optics', 'Modern Physics'],
                'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry', 'Environmental Chemistry'],
                'Biology': ['Cell Biology', 'Genetics', 'Ecology', 'Evolution', 'Physiology', 'Biochemistry'],
                'English': ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Writing Skills', 'Speaking Practice', 'Listening Comprehension']
            };
            
            for (const [key, topics] of Object.entries(topicMap)) {
                if (goal.toLowerCase().includes(key.toLowerCase())) {
                    return topics;
                }
            }
            
            // Default topics if no match
            return ['Fundamental Concepts', 'Core Principles', 'Advanced Topics', 'Applications', 'Problem Solving', 'Review'];
        }
        
        // Generate daily study plan
        function generateDailyStudyPlan(duration, goal, topics, dailyHours, learningStyle) {
            const days = parseInt(duration);
            const topicsPerDay = Math.max(1, Math.ceil(topics.length / (days * 0.7))); // Spread topics over 70% of days
            
            for (let day = 1; day <= days; day++) {
                const studyPeriod = document.createElement('div');
                studyPeriod.className = 'study-period';
                
                // Calculate topic indices for this day
                const startTopicIndex = ((day - 1) * topicsPerDay) % topics.length;
                const endTopicIndex = Math.min(startTopicIndex + topicsPerDay, topics.length);
                const dayTopics = topics.slice(startTopicIndex, endTopicIndex);
                
                // Calculate review day or new content day
                const isReviewDay = (day % 5 === 0) || (day === days);
                
                const periodTitle = document.createElement('div');
                periodTitle.className = 'period-title';
                periodTitle.innerHTML = `
                    <span><i class="fas fa-calendar-day"></i> Day ${day}: ${isReviewDay ? 'Review & Practice' : 'Learning New Concepts'}</span>
                    <span class="total-hours">${dailyHours} hours</span>
                `;
                
                const content = document.createElement('div');
                
                let dayContent = '';
                
                if (isReviewDay && day > 1) {
                    // Review day content
                    dayContent = `
                        <div class="study-topic-item">
                            <div class="topic-header">
                                <div class="topic-name">Comprehensive Review</div>
                                <div class="topic-time">${Math.floor(parseInt(dailyHours) * 0.4)} hours</div>
                            </div>
                            <p style="color: var(--text-light); margin-top: 8px;">Review all concepts covered in past 4 days</p>
                            <div class="subtopics">
                                <div class="subtopic">Consolidate notes and summaries</div>
                                <div class="subtopic">Identify weak areas for improvement</div>
                                <div class="subtopic">Practice recall without references</div>
                            </div>
                        </div>
                        
                        <div class="study-topic-item">
                            <div class="topic-header">
                                <div class="topic-name">Practice & Application</div>
                                <div class="topic-time">${Math.floor(parseInt(dailyHours) * 0.4)} hours</div>
                            </div>
                            <p style="color: var(--text-light); margin-top: 8px;">Apply learned concepts through practice</p>
                            <div class="subtopics">
                                <div class="subtopic">Solve practice problems and exercises</div>
                                <div class="subtopic">Complete past exam papers</div>
                                <div class="subtopic">Work on application projects</div>
                            </div>
                        </div>
                        
                        <div class="study-topic-item">
                            <div class="topic-header">
                                <div class="topic-name">Assessment & Planning</div>
                                <div class="topic-time">${Math.floor(parseInt(dailyHours) * 0.2)} hours</div>
                            </div>
                            <p style="color: var(--text-light); margin-top: 8px;">Evaluate progress and plan next steps</p>
                            <div class="subtopics">
                                <div class="subtopic">Self-assessment quiz</div>
                                <div class="subtopic">Update study plan based on progress</div>
                                <div class="subtopic">Set goals for next study period</div>
                            </div>
                        </div>
                    `;
                } else {
                    // New learning day
                    let topicTime = Math.floor(parseInt(dailyHours) / dayTopics.length);
                    
                    dayTopics.forEach((topic, index) => {
                        const subtopics = generateSubtopics(topic, goal);
                        const timeAllocation = index === dayTopics.length - 1 ? 
                            (parseInt(dailyHours) - (topicTime * (dayTopics.length - 1))) + ' hours' : 
                            topicTime + ' hours';
                        
                        dayContent += `
                            <div class="study-topic-item">
                                <div class="topic-header">
                                    <div class="topic-name">${topic}</div>
                                    <div class="topic-time">${timeAllocation}</div>
                                </div>
                                <p style="color: var(--text-light); margin-top: 8px;">${getTopicDescription(topic, goal)}</p>
                                ${subtopics ? `<div class="subtopics">${subtopics}</div>` : ''}
                                <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-light);">
                                    <i class="fas fa-lightbulb"></i> <strong>Study Approach:</strong> ${getStudyApproach(learningStyle)}
                                </div>
                            </div>
                        `;
                    });
                }
                
                content.innerHTML = dayContent;
                
                studyPeriod.appendChild(periodTitle);
                studyPeriod.appendChild(content);
                studyPlanResult.appendChild(studyPeriod);
            }
        }
        
        // Generate weekly study plan
        function generateWeeklyStudyPlan(duration, goal, topics, dailyHours, learningStyle) {
            const weeks = Math.ceil(parseInt(duration) / 7);
            const topicsPerWeek = Math.max(2, Math.ceil(topics.length / weeks));
            
            for (let week = 1; week <= weeks; week++) {
                const studyPeriod = document.createElement('div');
                studyPeriod.className = 'study-period';
                
                // Calculate topic indices for this week
                const startTopicIndex = ((week - 1) * topicsPerWeek) % topics.length;
                const endTopicIndex = Math.min(startTopicIndex + topicsPerWeek, topics.length);
                const weekTopics = topics.slice(startTopicIndex, endTopicIndex);
                
                const periodTitle = document.createElement('div');
                periodTitle.className = 'period-title';
                periodTitle.innerHTML = `
                    <span><i class="fas fa-calendar-week"></i> Week ${week}: ${weekTopics.join(', ')}</span>
                    <span class="total-hours">${parseInt(dailyHours) * 7} hours</span>
                `;
                
                const content = document.createElement('div');
                
                // Generate daily breakdown for the week
                let weekContent = `
                    <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;">Weekly Focus</h5>
                        <p>Master ${weekTopics.length} key topics with comprehensive understanding and application</p>
                    </div>
                `;
                
                // Daily breakdown
                const dailyBreakdown = [
                    { day: 'Monday', focus: 'Concept Introduction', time: Math.floor(parseInt(dailyHours) * 0.3) + ' hours' },
                    { day: 'Tuesday', focus: 'Deep Learning & Examples', time: Math.floor(parseInt(dailyHours) * 0.4) + ' hours' },
                    { day: 'Wednesday', focus: 'Practice & Application', time: Math.floor(parseInt(dailyHours) * 0.5) + ' hours' },
                    { day: 'Thursday', focus: 'Review & Weak Areas', time: Math.floor(parseInt(dailyHours) * 0.3) + ' hours' },
                    { day: 'Friday', focus: 'Advanced Concepts', time: Math.floor(parseInt(dailyHours) * 0.4) + ' hours' },
                    { day: 'Saturday', focus: 'Practice Tests', time: Math.floor(parseInt(dailyHours) * 0.6) + ' hours' },
                    { day: 'Sunday', focus: 'Review & Planning', time: Math.floor(parseInt(dailyHours) * 0.3) + ' hours' }
                ];
                
                dailyBreakdown.forEach(dayPlan => {
                    weekContent += `
                        <div class="study-topic-item">
                            <div class="topic-header">
                                <div class="topic-name">${dayPlan.day}: ${dayPlan.focus}</div>
                                <div class="topic-time">${dayPlan.time}</div>
                            </div>
                            <div class="subtopics">
                                <div class="subtopic">${getWeeklyActivity(dayPlan.focus, weekTopics)}</div>
                                <div class="subtopic">${getWeeklyActivity2(dayPlan.focus, weekTopics)}</div>
                                <div class="subtopic">${getWeeklyActivity3(dayPlan.focus, weekTopics)}</div>
                            </div>
                        </div>
                    `;
                });
                
                content.innerHTML = weekContent;
                
                studyPeriod.appendChild(periodTitle);
                studyPeriod.appendChild(content);
                studyPlanResult.appendChild(studyPeriod);
            }
        }
        
        // Generate monthly study plan
        function generateMonthlyStudyPlan(duration, goal, topics, dailyHours, learningStyle) {
            const months = Math.ceil(parseInt(duration) / 30);
            
            for (let month = 1; month <= months; month++) {
                const studyPeriod = document.createElement('div');
                studyPeriod.className = 'study-period';
                
                // Split topics across months
                const topicsPerMonth = Math.ceil(topics.length / months);
                const startIndex = (month - 1) * topicsPerMonth;
                const monthTopics = topics.slice(startIndex, startIndex + topicsPerMonth);
                
                const periodTitle = document.createElement('div');
                periodTitle.className = 'period-title';
                periodTitle.innerHTML = `
                    <span><i class="fas fa-calendar-alt"></i> Month ${month}: Mastery Phase</span>
                    <span class="total-hours">${parseInt(dailyHours) * 30} hours</span>
                `;
                
                const content = document.createElement('div');
                
                let monthContent = `
                    <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: #f0f9ff; border-radius: 8px;">
                        <h5 style="color: #0369a1; margin-bottom: 8px;">Monthly Objectives</h5>
                        <ul style="padding-left: 20px;">
                            <li>Master ${monthTopics.length} core topics comprehensively</li>
                            <li>Develop problem-solving skills through practice</li>
                            <li>Build strong conceptual understanding</li>
                            <li>Prepare for assessments and exams</li>
                            <li>Apply knowledge to real-world scenarios</li>
                        </ul>
                    </div>
                    
                    <div class="study-topic-item">
                        <div class="topic-header">
                            <div class="topic-name">Week 1-2: Foundation Building</div>
                            <div class="topic-time">${Math.floor(parseInt(dailyHours) * 14)} hours</div>
                        </div>
                        <p style="color: var(--text-light); margin-top: 8px;">Establish strong understanding of fundamental concepts</p>
                        <div class="subtopics">
                            ${monthTopics.map(topic => `<div class="subtopic">${topic} fundamentals</div>`).join('')}
                        </div>
                    </div>
                    
                    <div class="study-topic-item">
                        <div class="topic-header">
                            <div class="topic-name">Week 3: Application & Practice</div>
                            <div class="topic-time">${Math.floor(parseInt(dailyHours) * 7)} hours</div>
                        </div>
                        <p style="color: var(--text-light); margin-top: 8px;">Apply concepts through exercises and problems</p>
                        <div class="subtopics">
                            <div class="subtopic">Solve practice problems for each topic</div>
                            <div class="subtopic">Work on application projects</div>
                            <div class="subtopic">Complete past exam questions</div>
                        </div>
                    </div>
                    
                    <div class="study-topic-item">
                        <div class="topic-header">
                            <div class="topic-name">Week 4: Review & Assessment</div>
                            <div class="topic-time">${Math.floor(parseInt(dailyHours) * 7)} hours</div>
                        </div>
                        <p style="color: var(--text-light); margin-top: 8px;">Consolidate knowledge and evaluate progress</p>
                        <div class="subtopics">
                            <div class="subtopic">Comprehensive review of all month topics</div>
                            <div class="subtopic">Mock tests and self-assessment</div>
                            <div class="subtopic">Identify and address weak areas</div>
                            <div class="subtopic">Plan for next month's study</div>
                        </div>
                    </div>
                `;
                
                content.innerHTML = monthContent;
                
                studyPeriod.appendChild(periodTitle);
                studyPeriod.appendChild(content);
                studyPlanResult.appendChild(studyPeriod);
            }
        }
        
        // Helper functions for study plan generation
        function getTopicDescription(topic, goal) {
            const descriptions = {
                'Programming Fundamentals': 'Learn basic programming concepts, syntax, and problem-solving approaches',
                'Data Structures': 'Understand how data is organized, stored, and manipulated efficiently',
                'Algorithms': 'Study step-by-step procedures for solving computational problems',
                'Calculus': 'Learn differential and integral calculus with applications',
                'Linear Algebra': 'Study vectors, matrices, and linear transformations',
                'Probability': 'Understand likelihood, randomness, and statistical inference'
            };
            
            return descriptions[topic] || `Study ${topic} concepts and applications in ${goal}`;
        }
        
        function generateSubtopics(topic, goal) {
            const subtopicMap = {
                'Programming Fundamentals': ['Variables & Data Types', 'Control Structures', 'Functions', 'Basic I/O', 'Debugging'],
                'Data Structures': ['Arrays & Lists', 'Stacks & Queues', 'Trees & Graphs', 'Hash Tables', 'Complexity Analysis'],
                'Algorithms': ['Sorting Algorithms', 'Searching Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms'],
                'Calculus': ['Limits & Continuity', 'Derivatives', 'Integrals', 'Applications', 'Multivariable Calculus'],
                'Linear Algebra': ['Vectors & Spaces', 'Matrices', 'Determinants', 'Eigenvalues', 'Linear Transformations'],
                'Probability': ['Basic Probability', 'Random Variables', 'Distributions', 'Statistical Inference', 'Hypothesis Testing']
            };
            
            if (subtopicMap[topic]) {
                return subtopicMap[topic].map(subtopic => `<div class="subtopic">${subtopic}</div>`).join('');
            }
            
            // Generate generic subtopics
            return `
                <div class="subtopic">Basic concepts and definitions</div>
                <div class="subtopic">Key principles and theories</div>
                <div class="subtopic">Practical applications and examples</div>
                <div class="subtopic">Common problems and solutions</div>
                <div class="subtopic">Advanced topics and extensions</div>
            `;
        }
        
        function getStudyApproach(learningStyle) {
            const approaches = {
                'visual': 'Use diagrams, charts, mind maps, and visual aids for better retention',
                'auditory': 'Listen to lectures, explain concepts aloud, use mnemonic devices',
                'reading': 'Focus on textbooks, notes, written explanations, and detailed reading',
                'kinesthetic': 'Hands-on practice, build models, use physical objects, practical application',
                '': 'Mix of reading, practice, visualization, and discussion'
            };
            
            return approaches[learningStyle] || approaches[''];
        }
        
        function getWeeklyActivity(focus, topics) {
            const activities = {
                'Concept Introduction': `Study ${topics[0] || 'new concepts'} fundamentals`,
                'Deep Learning & Examples': 'Work through detailed examples and case studies',
                'Practice & Application': 'Solve practice problems and exercises',
                'Review & Weak Areas': 'Review previous topics and address weak areas',
                'Advanced Concepts': 'Study advanced aspects and applications',
                'Practice Tests': 'Complete timed practice tests and exams',
                'Review & Planning': 'Review week progress and plan next week'
            };
            
            return activities[focus] || 'Study and practice';
        }
        
        function getWeeklyActivity2(focus, topics) {
            const activities = {
                'Concept Introduction': 'Watch explanatory videos or lectures',
                'Deep Learning & Examples': 'Create detailed notes and summaries',
                'Practice & Application': 'Work on application projects',
                'Review & Weak Areas': 'Revisit challenging concepts',
                'Advanced Concepts': 'Explore real-world applications',
                'Practice Tests': 'Analyze mistakes and learn from them',
                'Review & Planning': 'Set goals and create study schedule'
            };
            
            return activities[focus] || 'Consolidate learning';
        }
        
        function getWeeklyActivity3(focus, topics) {
            const activities = {
                'Concept Introduction': 'Complete introductory exercises',
                'Deep Learning & Examples': 'Teach concepts to someone else',
                'Practice & Application': 'Apply concepts to new problems',
                'Review & Weak Areas': 'Practice specific weak areas',
                'Advanced Concepts': 'Research current developments',
                'Practice Tests': 'Time management practice',
                'Review & Planning': 'Organize materials for next week'
            };
            
            return activities[focus] || 'Reinforce understanding';
        }
        
        // Generate study tips
        function generateStudyTips(goal, learningStyle, duration) {
            let tipsHTML = `
                <div class="tip-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>Optimal Study Sessions:</strong> Break your ${parseInt(dailyHours)} hours into 45-50 minute focused sessions with 10-15 minute breaks
                    </div>
                </div>
                
                <div class="tip-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>Active Recall:</strong> Test yourself frequently without looking at notes to strengthen memory retention
                    </div>
                </div>
                
                <div class="tip-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>Spaced Repetition:</strong> Review material at increasing intervals (1 day, 3 days, 1 week, 2 weeks)
                    </div>
                </div>
            `;
            
            // Learning style specific tips
            if (learningStyle === 'visual') {
                tipsHTML += `
                    <div class="tip-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <strong>Visual Learning Strategy:</strong> Create mind maps, diagrams, and color-coded notes. Use flashcards with images.
                        </div>
                    </div>
                `;
            } else if (learningStyle === 'auditory') {
                tipsHTML += `
                    <div class="tip-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <strong>Auditory Learning Strategy:</strong> Record and listen to summaries. Explain concepts aloud. Use mnemonic devices and rhymes.
                        </div>
                    </div>
                `;
            }
            
            // Duration-based tips
            if (parseInt(duration) <= 7) {
                tipsHTML += `
                    <div class="tip-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <strong>Short-term Intensive Strategy:</strong> Focus on high-yield topics. Prioritize practice over passive reading. Take regular breaks to avoid burnout.
                        </div>
                    </div>
                `;
            } else if (parseInt(duration) > 30) {
                tipsHTML += `
                    <div class="tip-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <strong>Long-term Consistency:</strong> Establish daily routine. Track progress weekly. Schedule regular review sessions to prevent forgetting.
                        </div>
                    </div>
                `;
            }
            
            studyTips.innerHTML = tipsHTML;
        }
        
        // Exam countdown functionality
        let countdownInterval = null;
        
        setExamDateBtn.addEventListener('click', () => {
            const examDate = new Date(examDateInput.value);
            const today = new Date();
            
            if (examDate <= today) {
                alert('Please select a future date for your exam.');
                return;
            }
            
            // Show countdown display
            countdownDisplay.style.display = 'flex';
            
            // Clear any existing interval
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            
            // Update countdown immediately
            updateCountdown(examDate);
            
            // Update countdown every second
            countdownInterval = setInterval(() => {
                updateCountdown(examDate);
            }, 1000);
        });
        
        function updateCountdown(examDate) {
            const now = new Date().getTime();
            const distance = examDate.getTime() - now;
            
            if (distance < 0) {
                // Exam date has passed
                countdownDays.textContent = '0';
                countdownHours.textContent = '0';
                countdownMinutes.textContent = '0';
                countdownSeconds.textContent = '0';
                
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                }
                return;
            }
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update display
            countdownDays.textContent = days.toString().padStart(2, '0');
            countdownHours.textContent = hours.toString().padStart(2, '0');
            countdownMinutes.textContent = minutes.toString().padStart(2, '0');
            countdownSeconds.textContent = seconds.toString().padStart(2, '0');
        }
        
        // Initialize the page
        window.addEventListener('DOMContentLoaded', () => {
            // Set exam countdown with default date
            const defaultExamDate = new Date(examDateInput.value);
            updateCountdown(defaultExamDate);
            countdownDisplay.style.display = 'flex';
            
            countdownInterval = setInterval(() => {
                updateCountdown(defaultExamDate);
            }, 1000);
            
            // Set current date as minimum for exam date input
            const today = new Date().toISOString().split('T')[0];
            examDateInput.min = today;
            
            // Handle responsive nav menu
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    mainNav.style.display = '';
                }
            });
        });