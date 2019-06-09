<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>{{ page.title }}</title>
        <description>{{ page.description }}</description>
        <link>{{ site.url }}</link>
        <atom:link href="{{ site.url }}{{ page.permalink }}" rel="self" type="application/rss+xml"/>
        <pubDate>{{ site.time }}</pubDate>
        <lastBuildDate>{{ site.time }}</lastBuildDate>
        <generator>Jekyll v3.3.1</generator>
        <item>
            <title>
                {{ page.title }}
            </title>
            <pubDate>{{ page.date }}</pubDate>
            <link>
                {{ site.url }}/trainings/do-023/
            </link>
            <guid isPermaLink="true">
                {{ site.url }}/trainings/do-023/
            </guid>
        </item>
    </channel>
</rss>
