'use client';

import { useState, useEffect } from 'react';
import { Save, RefreshCw, Layout, Info, Scissors, Mail, Plus, Trash2, Image as ImageIcon } from 'lucide-react';

export default function AdminPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('hero');

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(d => {
                if (d && !d.error) {
                    setData(d);
                } else {
                    console.error("Failed to load data:", d.error);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setLoading(false);
            });
    }, []);


    const handleSave = async () => {
        setSaving(true);
        const res = await fetch('/api/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            alert('Settings saved successfully!');
        }
        setSaving(false);
    };

    if (!data || data.error) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl max-w-sm">
                <Trash2 className="mx-auto text-red-500 mb-4" size={48} />
                <h2 className="text-2xl font-bold dark:text-white mb-2">Load Error</h2>
                <p className="text-gray-500 mb-6">We couldn't load the website data. Make sure the JSON file exists.</p>
                <button onClick={() => window.location.reload()} className="px-6 py-2 bg-primary-600 text-white rounded-xl font-bold">Retry</button>
            </div>
        </div>
    );

    const updateField = (section: string, field: string, value: any) => {
        setData({
            ...data,
            [section]: {
                ...data[section],
                [field]: value
            }
        });
    };


    const updateService = (id: string, field: string, value: any) => {
        const newServices = data.services.map((s: any) =>
            s.id === id ? { ...s, [field]: value } : s
        );
        setData({ ...data, services: newServices });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-serif font-bold dark:text-white">Website Manager</h1>
                        <p className="text-gray-500 dark:text-gray-400">Manage your lounge content without code</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-bold disabled:opacity-50"
                    >
                        {saving ? <RefreshCw className="animate-spin" /> : <Save size={20} />}
                        {saving ? 'Saving...' : 'Save All Changes'}
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Tabs */}
                    <aside className="space-y-2">
                        {[
                            { id: 'hero', label: 'Hero Section', icon: Layout },
                            { id: 'about', label: 'About Us', icon: Info },
                            { id: 'services', label: 'Services', icon: Scissors },
                            { id: 'contact', label: 'Contact & Info', icon: Mail },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-white dark:bg-gray-800 shadow-sm text-primary-600'
                                    : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900'
                                    }`}
                            >
                                <tab.icon size={20} />
                                {tab.label}
                            </button>
                        ))}
                    </aside>

                    {/* Editor Content */}
                    <main className="md:col-span-3 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-800">

                        {activeTab === 'hero' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-bold dark:text-white mb-6">Hero Settings</h2>
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-500">HERO TITLE</label>
                                    <input
                                        type="text"
                                        value={data.hero.title}
                                        onChange={(e) => updateField('hero', 'title', e.target.value)}
                                        className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-500">DESCRIPTION</label>
                                    <textarea
                                        rows={4}
                                        value={data.hero.subtitle}
                                        onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                                        className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'about' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-bold dark:text-white mb-6">About Us Content</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">TAB TITLE</label>
                                        <input
                                            type="text"
                                            value={data.about.title}
                                            onChange={(e) => updateField('about', 'title', e.target.value)}
                                            className="w-full px-6 py-3 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">ESTABLISHED YEAR</label>
                                        <input
                                            type="text"
                                            value={data.about.established || '2021'}
                                            onChange={(e) => updateField('about', 'established', e.target.value)}
                                            className="w-full px-6 py-3 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-500">MAIN CONTENT</label>
                                    <textarea
                                        rows={4}
                                        value={data.about.content}
                                        onChange={(e) => updateField('about', 'content', e.target.value)}
                                        className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-500">HIGHLIGHT BOX</label>
                                    <textarea
                                        rows={3}
                                        value={data.about.highlight}
                                        onChange={(e) => updateField('about', 'highlight', e.target.value)}
                                        className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800 italic"
                                    />
                                </div>
                            </div>
                        )}


                        {activeTab === 'services' && (
                            <div className="space-y-8 animate-fadeIn">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold dark:text-white">Service Menu</h2>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-bold text-sm">
                                        <Plus size={16} /> Add Service
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    {data.services.map((service: any) => (
                                        <div key={service.id} className="p-6 border dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800/50 relative group">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    value={service.title}
                                                    onChange={(e) => updateService(service.id, 'title', e.target.value)}
                                                    className="font-bold text-lg bg-transparent border-b border-transparent focus:border-primary-500 outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    value={service.price}
                                                    onChange={(e) => updateService(service.id, 'price', e.target.value)}
                                                    className="text-primary-500 font-bold bg-transparent border-b border-transparent focus:border-primary-500 outline-none text-right"
                                                />
                                            </div>
                                            <textarea
                                                value={service.description}
                                                onChange={(e) => updateService(service.id, 'description', e.target.value)}
                                                className="w-full mt-4 bg-transparent text-gray-500 dark:text-gray-400 outline-none resize-none"
                                            />
                                            <button className="absolute -top-3 -right-3 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-bold dark:text-white mb-6">Contact & Socials</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">PHONE NUMBER</label>
                                        <input
                                            type="text"
                                            value={data.contact.phone}
                                            onChange={(e) => updateField('contact', 'phone', e.target.value)}
                                            className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">EMAIL</label>
                                        <input
                                            type="text"
                                            value={data.contact.email}
                                            onChange={(e) => updateField('contact', 'email', e.target.value)}
                                            className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">OFFICE ADDRESS</label>
                                        <input
                                            type="text"
                                            value={data.contact.address}
                                            onChange={(e) => updateField('contact', 'address', e.target.value)}
                                            className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">OPENING HOURS</label>
                                        <input
                                            type="text"
                                            value={data.contact.hours}
                                            onChange={(e) => updateField('contact', 'hours', e.target.value)}
                                            className="w-full px-6 py-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
                                        />
                                    </div>
                                </div>

                                <hr className="border-gray-100 dark:border-gray-800 my-8" />

                                <h3 className="text-xl font-bold dark:text-white mb-4">Social Media Links</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10">FB</div>
                                        <input
                                            type="text"
                                            value={data.contact.facebook}
                                            onChange={(e) => updateField('contact', 'facebook', e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                                            placeholder="Facebook URL"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10">IG</div>
                                        <input
                                            type="text"
                                            value={data.contact.instagram}
                                            onChange={(e) => updateField('contact', 'instagram', e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                                            placeholder="Instagram URL"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10">TW</div>
                                        <input
                                            type="text"
                                            value={data.contact.twitter}
                                            onChange={(e) => updateField('contact', 'twitter', e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                                            placeholder="Twitter URL"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </div>
    );
}
