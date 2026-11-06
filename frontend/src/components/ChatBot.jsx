import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { api } from '../services/api';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "Salut ! Vous cherchez un site pour votre commerce, ou vous voulez en savoir plus sur mon profil tech ? Dites-moi et je vous guide.",
  quickReplies: [
    'Je veux un site pour mon commerce',
    'Je veux voir le profil tech',
  ],
};

// Ouverture automatique au scroll : une seule fois par session,
// uniquement sur écran large (sur mobile la fenêtre masquerait le contenu).
const AUTO_OPEN_KEY = 'chatbot_auto_opened';
const AUTO_OPEN_SCROLL_RATIO = 0.6; // fraction de la hauteur d'écran
const DESKTOP_QUERY = '(min-width: 640px)';

function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* stockage indisponible : on ignore */
  }
}
 
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTeaser, setShowTeaser] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const autoOpenedRef = useRef(false);
 
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
 
  useEffect(() => {
    // Pas de focus auto si la fenêtre s'est ouverte au scroll : on ne vole pas le clavier.
    if (open && !autoOpenedRef.current) setTimeout(() => inputRef.current?.focus(), 100);
    autoOpenedRef.current = false;
  }, [open]);

  useEffect(() => {
    if (readSession(AUTO_OPEN_KEY)) return;

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * AUTO_OPEN_SCROLL_RATIO) return;
      window.removeEventListener('scroll', onScroll);
      writeSession(AUTO_OPEN_KEY, '1');
      if (window.matchMedia(DESKTOP_QUERY).matches) {
        autoOpenedRef.current = true;
        setOpen(true);
      } else {
        setShowTeaser(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = () => {
    // Une interaction manuelle désactive l'ouverture automatique pour la session.
    writeSession(AUTO_OPEN_KEY, '1');
    setShowTeaser(false);
    setOpen((o) => !o);
  };
 
  const send = async (overrideText) => {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;
 
    const userMsg = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError('');
 
    const history = newMessages.map((m) => ({
      role: m.role,
      content: m.content,
    }));
 
    try {
      const { reply } = await api.chat(history);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message || 'Le chatbot est temporairement indisponible.');
    } finally {
      setLoading(false);
    }
  };
 
  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };
 
  return (
    <>
      {showTeaser && !open && (
        <button
          onClick={toggle}
          className="fixed bottom-24 right-6 z-50 max-w-[15rem] text-left text-sm text-gray-800 bg-white border border-gray-100 rounded-2xl rounded-br-sm shadow-lg px-4 py-3 animate-fade-in"
        >
          Une question sur votre projet ? Je réponds en quelques secondes.
        </button>
      )}

      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
 
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-teal-600 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm"> Assistant Oryel dev </div>
              <div className="text-teal-100 text-xs">
                Répond en quelques secondes
              </div>
            </div>
          </div>
 
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-teal-600 text-white rounded-tr-sm'
                      : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.quickReplies && messages.length === 1 && (
                  <div className="flex flex-col gap-1.5 mt-2 w-full">
                    {msg.quickReplies.map((qr, j) => (
                      <button
                        key={j}
                        onClick={() => send(qr)}
                        className="text-left text-xs text-teal-700 bg-teal-50 border border-teal-200 hover:bg-teal-100 px-3 py-2 rounded-lg transition-colors"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
 
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
 
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
 
            <div ref={bottomRef} />
          </div>
 
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Votre question..."
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400"
              disabled={loading}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg transition-colors disabled:opacity-40"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
