'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const quizQuestions = [
  {
    id: 1,
    question: "What's your ideal weekend?",
    options: [
      { text: "Hiking in nature", interests: ['Hiking', 'Nature', 'Outdoors'] },
      { text: "Cozy cafe with a book", interests: ['Reading', 'Coffee', 'Relaxing'] },
      { text: "Trying new restaurants", interests: ['Foodie', 'Dining', 'Culinary'] },
      { text: "Working out at the gym", interests: ['Fitness', 'Health', 'Sports'] }
    ]
  },
  {
    id: 2,
    question: "Pick your perfect date:",
    options: [
      { text: "Art gallery opening", interests: ['Art', 'Culture', 'Museums'] },
      { text: "Live music concert", interests: ['Music', 'Concerts', 'Entertainment'] },
      { text: "Beach day", interests: ['Beach', 'Sun', 'Water'] },
      { text: "Cooking class together", interests: ['Cooking', 'Food', 'Learning'] }
    ]
  },
  {
    id: 3,
    question: "What energizes you?",
    options: [
      { text: "Meeting new people", interests: ['Social', 'Outgoing', 'Networking'] },
      { text: "Quiet time alone", interests: ['Introspective', 'Calm', 'Mindful'] },
      { text: "Adventure and thrills", interests: ['Adventure', 'Excitement', 'Risk-taking'] },
      { text: "Creative projects", interests: ['Creative', 'Artistic', 'DIY'] }
    ]
  },
  {
    id: 4,
    question: "Your go-to conversation topic:",
    options: [
      { text: "Travel stories", interests: ['Travel', 'Exploration', 'Culture'] },
      { text: "Books and movies", interests: ['Entertainment', 'Stories', 'Cinema'] },
      { text: "Tech and innovation", interests: ['Technology', 'Innovation', 'Science'] },
      { text: "Philosophy and life", interests: ['Deep-thinking', 'Philosophy', 'Meaningful'] }
    ]
  },
  {
    id: 5,
    question: "How do you relax?",
    options: [
      { text: "Yoga or meditation", interests: ['Yoga', 'Meditation', 'Wellness'] },
      { text: "Watching series", interests: ['TV', 'Movies', 'Entertainment'] },
      { text: "Playing sports", interests: ['Sports', 'Active', 'Competitive'] },
      { text: "Cooking a meal", interests: ['Cooking', 'Culinary', 'Home'] }
    ]
  },
  {
    id: 6,
    question: "What's most important in a relationship?",
    options: [
      { text: "Shared adventures", interests: ['Adventurous', 'Explorer', 'Spontaneous'] },
      { text: "Deep conversations", interests: ['Intellectual', 'Communicative', 'Thoughtful'] },
      { text: "Similar values", interests: ['Values-driven', 'Principled', 'Authentic'] },
      { text: "Having fun together", interests: ['Fun', 'Playful', 'Lighthearted'] }
    ]
  },
  {
    id: 7,
    question: "Your dream vacation:",
    options: [
      { text: "European cities tour", interests: ['Travel', 'Culture', 'History'] },
      { text: "Tropical beach resort", interests: ['Beach', 'Relaxation', 'Paradise'] },
      { text: "Mountain cabin retreat", interests: ['Nature', 'Peaceful', 'Rustic'] },
      { text: "Adventure expedition", interests: ['Adventure', 'Exploration', 'Outdoors'] }
    ]
  },
  {
    id: 8,
    question: "Pick your vibe:",
    options: [
      { text: "Life of the party", interests: ['Social', 'Energetic', 'Fun'] },
      { text: "Thoughtful observer", interests: ['Observant', 'Reflective', 'Wise'] },
      { text: "Natural leader", interests: ['Leadership', 'Confident', 'Driven'] },
      { text: "Creative free spirit", interests: ['Creative', 'Free-spirited', 'Unique'] }
    ]
  }
]

export default function GetStartedPage() {
  const router = useRouter()
  const [step, setStep] = useState('welcome') // welcome, quiz, profile, complete
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState([])
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    location: '',
    bio: '',
    lookingFor: 'relationship'
  })

  const handleAnswerSelect = (interests) => {
    setSelectedInterests([...selectedInterests, ...interests])
    
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setStep('profile')
      }, 300)
    }
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    
    // Get unique interests
    const uniqueInterests = [...new Set(selectedInterests)].slice(0, 6)
    
    // Save to localStorage
    const userProfile = {
      ...profile,
      interests: uniqueInterests,
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
    
    setStep('complete')
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center text-white">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">❤️</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Welcome to Heartlink!</h1>
            <p className="text-xl text-primary-100 mb-8">
              Let's discover your perfect match through a fun personality quiz
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-bold mb-1">Quick & Fun</h3>
                <p className="text-sm text-primary-100">Just 8 questions, takes 2 minutes</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-bold mb-1">Smart Matching</h3>
                <p className="text-sm text-primary-100">We'll find your compatible matches</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-bold mb-1">Your Privacy</h3>
                <p className="text-sm text-primary-100">Your data stays safe with us</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep('quiz')}
            className="bg-white text-primary-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-primary-50 transition-all transform hover:scale-105"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    )
  }

  if (step === 'quiz') {
    const question = quizQuestions[currentQuestion]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-white text-sm mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.interests)}
                  className="w-full p-6 text-left border-2 border-gray-200 rounded-2xl hover:border-primary-600 hover:bg-primary-50 transition-all group"
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-primary-700">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Almost There!
              </h2>
              <p className="text-gray-600">
                We've learned about your personality. Now tell us a bit about yourself!
              </p>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What's your name? *
                </label>
                <input
                  type="text"
                  required
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your age *
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="100"
                    value={profile.age}
                    onChange={(e) => setProfile({...profile, age: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={profile.location}
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself *
                </label>
                <textarea
                  required
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
                  placeholder="Share your hobbies, what makes you unique, what you're passionate about..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you looking for? *
                </label>
                <select
                  value={profile.lookingFor}
                  onChange={(e) => setProfile({...profile, lookingFor: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:outline-none"
                >
                  <option value="relationship">Long-term relationship</option>
                  <option value="dating">Casual dating</option>
                  <option value="friends">New friends</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
              >
                Complete Profile →
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-7xl mb-6">🎊</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              You're All Set!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your profile is complete and ready to find matches
            </p>

            <div className="bg-primary-50 rounded-2xl p-6 mb-8">
              <p className="text-primary-900 font-medium mb-2">
                Based on your answers, we've identified your top interests:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[...new Set(selectedInterests)].slice(0, 6).map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => router.push('/browse')}
              className="bg-primary-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-primary-700 transition-all transform hover:scale-105"
            >
              Start Browsing Matches 💝
            </button>
          </div>
        </div>
      </div>
    )
  }
}
