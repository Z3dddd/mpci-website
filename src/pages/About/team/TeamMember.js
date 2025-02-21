import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TeamMember.css';

function TeamMember() {
  const { id } = useParams();

  const teamMembers = {
    'syed-attaullah-quadri': {
      name: 'Syed Attaullah Quadri',
      role: 'Chief Executive Officer',
      shortBio: 'A visionary leader with over 25 years of experience in construction and project management.',
      longBio: [
        'Syed Attaullah Quadri has been at the forefront of innovative construction solutions for more than two decades. His journey in the construction industry began with a strong foundation in civil engineering and a passion for sustainable building practices.',
        'Under his leadership, the company has pioneered numerous breakthrough technologies in modular construction, setting new industry standards for quality and efficiency. His vision for sustainable, scalable construction solutions has transformed how we approach modern building challenges.',
        'A strong advocate for environmental responsibility in construction, he has led the company\'s initiatives in developing eco-friendly building methods and materials. His commitment to innovation and sustainability has earned him recognition as a thought leader in the construction industry.'
      ],
      achievements: [
        'Led the development of innovative modular construction techniques',
        'Pioneered sustainable building practices in the region',
        'Successfully delivered over 100 major construction projects',
        'Recognized for excellence in construction management'
      ],
      education: 'Master\'s in Construction Management'
    },
    'amtul-khatija': {
      name: 'Amtul Khatija',
      role: 'Technical Director',
      shortBio: 'An innovative technical leader specializing in sustainable construction technologies.',
      longBio: [
        'Amtul Khatija brings a wealth of expertise in construction technology and sustainable building practices. Her innovative approach to technical challenges has revolutionized our project execution methodology.',
        'With a strong background in architectural engineering and sustainable design, she has been instrumental in developing our company\'s green building initiatives. Her leadership in implementing cutting-edge construction technologies has significantly improved project efficiency and environmental impact.',
        'Her dedication to advancing construction technology while maintaining environmental responsibility has established new benchmarks in the industry. She continues to drive innovation in sustainable building practices and modular construction techniques.'
      ],
      achievements: [
        'Developed innovative sustainable construction methodologies',
        'Led the implementation of advanced building technologies',
        'Reduced project environmental impact by 40%',
        'Award-winning designs in sustainable architecture'
      ],
      education: 'Ph.D. in Architectural Engineering'
    },
    'syed-zaid-quadri': {
      name: 'Syed Zaid Quadri',
      role: 'Operations Manager',
      shortBio: 'A dynamic operations leader with expertise in project optimization and team management.',
      longBio: [
        'Syed Zaid Quadri excels in optimizing operational efficiency and project management. His strategic approach to operations has streamlined our project delivery process and enhanced team productivity.',
        'With extensive experience in construction operations and project coordination, he has successfully managed numerous large-scale projects. His expertise in lean construction principles and modern management methodologies has significantly improved project outcomes.',
        'His commitment to operational excellence and team development has created a culture of continuous improvement within the organization. Under his leadership, project delivery times have improved significantly while maintaining the highest quality standards.'
      ],
      achievements: [
        'Optimized project delivery efficiency by 30%',
        'Successfully managed over 50 major projects',
        'Implemented innovative project management systems',
        'Developed comprehensive team training programs'
      ],
      education: 'Master\'s in Project Management'
    }
  };

  const member = teamMembers[id];

  if (!member) {
    return (
      <div className="team-member-not-found">
        <h1>Team Member Not Found</h1>
        <Link to="/mpci-website/about" className="back-button">Back to About</Link>
      </div>
    );
  }

  return (
    <div className="team-member-page">
      <div className="team-member-hero">
        <h1>{member.name}</h1>
        <p>{member.role}</p>
      </div>

      <div className="team-member-content">
        <Link to="/mpci-website/about" className="back-button">← Back to About</Link>
        
        <div className="team-member-grid">
          <div className="team-member-info">
            <div className="bio-section">
              <h2>About</h2>
              <p className="short-bio">{member.shortBio}</p>
              {member.longBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="achievements-section">
              <h2>Key Achievements</h2>
              <ul>
                {member.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="education-section">
              <h2>Education</h2>
              <p>{member.education}</p>
            </div>
          </div>
          
          <div className="team-member-image"></div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember; 