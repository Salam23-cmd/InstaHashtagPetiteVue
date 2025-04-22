const App = {
  keyword: '',
  hashtags: [],
  loading: false,
  error: '',

  async generate() {
    if (!this.keyword.trim()) return;
    this.loading = true;
    this.error = '';
    this.hashtags = [];
    try {
      const res = await fetch(`/api/generateHashtags?keyword=${encodeURIComponent(this.keyword)}`);
      const data = await res.json();
      if (data.hashtags) {
        this.hashtags = data.hashtags.map(item => item.hashtag);
      } else {
        this.error = data.error || 'No hashtags found.';
      }
    } catch (err) {
      this.error = 'Failed to fetch hashtags.';
    } finally {
      this.loading = false;
    }
  }
};