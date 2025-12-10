# NYPost's Environment and Wildlife
## project description
This is a python-based project with the purpose of web-scraping the The New York
Post's Environment and Wildlife sub-sections, utilizing Selenium for web scraping
and NLTK for language processing. The result is a cleaned dataset of headlines,
article excerpts, and their publish dates. The captured article data spans from the
website's re-launch in 2013 to 2025, with over 2,400 articles represented. This
data is then manipulated and analyzed using pandas, to view headlines by keywords
within a data frames such as a single year, within seasons, or across all dates.
These data frames create opportunities to plot keyword frequencies in ways that
allow for deeper analysis of trends across time. The headlines captured in this
dataset were then used to train a chatgpt2 open ai model, creating a way to
creatively produce headlines in the style of the NYPost with a prompt giving
leading text, such as a keyword, location, or figure.
## rationale statement
The NYPost, owned by Rupert Murdoch, is one of many online-focused media outlets
with sensationalist tones towards science coverage as it interacts with politically
right-leaning news coverage. The outlet is one of few online news sources not using
a paywall model, allowing for wide readership and headline-focused social media
dissemination. According to the trade journal Press Gazette, The New York Post was
ranked 3rd in paper circulation in the United States in 2023, and the news website
consistently ranks in the top ten among visits nationally. 

This project argues that coverage about the environment and wildlife creates its own distinct reader
ecosystem, shaping how readers encounter explicitly political and social content
placed alongside it. The basic article data of the "flora and fauna" collected
here, separated from their contextual story content, is how many digital readers
encounter this information. The content is both humorously absurd, apocalyptic, and
targets interests and anxieties of its wide readership. Observationally, the Post
generally runs social interest stories as continued coverage, mirroring algorithmic
content consumption, with multiple specific stories interacting with topics of
editorial interest such as immigration, gender politics, and street safety. The
environment and wildlife sections also use this editorial model, with concurrent
articles about microplastics, animal disease, and environmental toxicity. 

Scraping this article data allows for data analysis that can be done separately from
continued and regular interaction with the Post website and social media, monetized
by ad placement and rewarded by engagement. Once dissociated from the interface of
the website, opportunities emerge for both analytic and creative engagement with
the content. The NYPost website search filtering only allows for filtering by the
wider section of "Science", rather than by the subsections of environment and
wildlife. By date, the search can only be filtered by results from the last month,
year, or week. On the Post website, the comment section is the only offered mode
for responding to the article. Training an AI model, as done in this project, is
one way of experimenting with creative production in collaboration with the article
data, made possible by web-scraping. The generation of fictional headlines becomes
a way to tap into and parody the paper’s distinctive editorial voice and the world-
building it performs.
## workflow
1. Selenium’s WebDriver was used to automate infinite scrolling on the NYPost
environment section. The script continued until the “Load More Articles” button was
no longer clickable, at which point the full HTML content of the page was scraped.
2. BeautifulSoup (bs4) was then used to parse the HTML, isolate the relevant
section of the page, and extract headlines, excerpts, and publication dates into
separate lists.
3. Pandas was used to compile these lists into a dataframe and export the result as
a CSV file.
4. Steps 2 and 3 were repeated for the NYPost wildlife section.
5. Minor data cleaning was performed using Google Sheets, including removing
duplicate articles, combining the wildlife and environment CSVs, sorting by
publication date, and adding separate columns for year, month, and day.
6. Using pandas, the cleaned CSV was read back in and additional dataframes were
generated for publication year as well as for seasonal groupings based on three-
month intervals.
7. Using NLTK, stopwords were imported and language processing was applied to the
headline column.
8. Python plotting methods were used to visualize word-frequency patterns across
the full dataset, within individual years, and within seasonal dataframes.
9. The headline column was manually saved as a plain-text file and uploaded to
Hugging Face as a dataset.
10. Using Hugging Face’s transformers and TRL libraries, a GPT-2 model was fine-
tuned on the headline dataset to generate fictional headlines.
## further uses
Future directions for this project include developing a front-facing site that can
display the results of the data analysis, or otherwise create a graphical user
interface for filtering and searching the dataset. Similarly, an interface could be
made to present the ai model for generating headlines, and pairing with other tools
such as image generation or user-submission of generated article titles would
create participatory engagement with the dataset. More advanced language processing
toolkits such as spaCy could be incorporated to better identify entities such as
people, places, or parts of speech present in the headlines.
## files list
- Environment_Wildlife_Stories_Cleaned.csv

Combined and cleaned CSV containing all environment and wildlife articles.
- nypost-web-scrape-full.ipynb

Notebook with the full web-scraping workflow and CSV export code.
- nypost-pandas.ipynb

Notebook for dataframe creation, data manipulation, and plotting.
- headlines.txt

Plain-text file containing all extracted headlines.
- nypost_model_train.ipynb

Notebook for training the GPT-2 model on the headline dataset.
