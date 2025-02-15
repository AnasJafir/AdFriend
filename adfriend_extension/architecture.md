Here’s a 7-day implementation plan with a checklist and MVP architecture tailored to your skills (Python + ORM + basic frontend). Let’s focus on shipping a functional prototype first!

## MVP Architecture

| Component         | Tools/Libraries                | Purpose                                      |
|-------------------|--------------------------------|----------------------------------------------|
| Chrome Extension  | HTML/CSS/JS + Bootstrap        | Detect ads, replace with AI-generated widgets |
| Backend API       | Python (Flask/FastAPI)         | Analyze webpage text, generate AI tips       |
| AI Service        | spaCy + OpenAI API (or Mistral)| Extract keywords, generate contextual tips   |
| Database (Optional)| PostgreSQL + SQLAlchemy       | Store user preferences (if time permits)     |

## 7-Day Implementation Checklist

### Day 1: Setup & Chrome Extension Basics

**Project Setup**
- Create folders: `/extension` (Chrome code), `/backend` (Python API).
- Initialize Git repository.

**Chrome Extension Skeleton**
- Create `manifest.json` (use Manifest V3).
- Add basic content script (`content.js`) to detect ads (use EasyList filters).
- Test loading the extension in Chrome via Developer Mode.

**Ad Detection**
- Block ads by URL patterns (e.g., `*://*.doubleclick.net/*`).

### Day 2: Build the Python Backend

**Flask API Setup**
- Create `app.py` with a `/analyze` endpoint.
- Install dependencies: `flask`, `spaCy`, `openai` (or Mistral).
- Load spaCy’s English model: `python -m spacy download en_core_web_sm`.

**Keyword Extraction**
- Write a function to extract top 5 nouns from webpage text using spaCy.

```python
def extract_keywords(text):
    doc = nlp(text)
    return [token.text for token in doc if token.pos_ in ['NOUN', 'PROPN']][:5]
```

**AI Tip Generation**
- Integrate OpenAI API (or local LLM) to generate tips from keywords.

### Day 3: Connect Extension to Backend

**Fetch Page Content**
- In `content.js`, send `document.body.innerText` to your Flask API.

**Replace Ads with AI Tips**
- Modify DOM to replace ad elements with a `<div>` showing the AI-generated tip.

```javascript
function replaceAdWithTip(adElement, tip) {
    adElement.innerHTML = `
      <div class="adfriend-widget">
        <p>${tip}</p>
      </div>
    `;
}
```

**Handle CORS**
- Add Flask-CORS to your backend to allow cross-origin requests.

### Day 4: Frontend Styling

**Bootstrap Widget Design**
- Style the widget with Bootstrap classes (e.g., cards, alerts).
- Add CSS animations for smooth transitions.

**Error Handling**
- Show fallback content (e.g., motivational quotes) if the API fails.

### Day 5: Database Integration (Optional)

**User Preferences Table**
- Create a `user_preferences` table with SQLAlchemy:

```python
class UserPreference(Base):
    __tablename__ = 'user_preferences'
    id = Column(Integer, primary_key=True)
    user_id = Column(String(255))
    preferred_topics = Column(JSON)
```

**API Endpoint for Preferences**
- Add `/preferences` endpoint to save/load user settings.

### Day 6: Polish & Debug

**Performance Checks**
- Optimize ad detection (use debouncing in JavaScript).
- Cache frequent AI responses in Flask (e.g., with flask-caching).

**Test on Multiple Sites**
- Verify ad replacement works on finance, fitness, and news sites.

### Day 7: Finalize & Deploy

**Package Extension**
- Build a `.zip` file of the `/extension` folder.

**Deploy Backend**
- Deploy Flask API to Render/Heroku (free tiers).

**Documentation**
- Write a `README.md` with setup instructions.

## MVP Features Checklist

| Feature                        | Status |
|--------------------------------|--------|
| Ad detection via EasyList      | ✅     |
| Keyword extraction (spaCy)     | ✅     |
| AI tip generation (OpenAI)     | ✅     |
| Widget styling (Bootstrap)     | ✅     |
| Backend API (Flask)            | ✅     |
| Basic error handling           | ✅     |

## Stretch Goals (If Time Permits)
- Let users customize AI tips (e.g., toggle finance/fitness).
- Add a popup settings menu in the extension.
- Log interactions to the database for analytics.
