# Video engineering

> Notes on about streaming and video development (mainly with js)

[[toc]]

---

**Some terms:**

**bitrate**: The measure of the throughput of streaming bits, typically measured in kilobits per second, or Kbps. Higher-quality streams (with better resolution and larger frame sizes) have a higher bitrate than lower-quality streams. Client bandwidth may limit the bitrate at which streams can play smoothly.

Browsers process videos with millisecond timestamps, that's why subtitles have to be converted based on video framerate: for video at 25 images per second the previous timecode would look like 00:00:23.880 in milliseconds format (1000/25 \* 22 = 880).

**FFmpeg**: A software framework that includes libraries and command-line tools for encoding, decoding, transcoding, muxing, and streaming video content. The FFmpeg container supports many standard video and audio formats, including various flavors of MPEG and MP3, and it creates HTTP-based output, among other formats.

**frame rate**: The number of frames in 1 second of video. The slower the frame rate, the lower the video quality. High-definition devices typically capture video at 30 or 60 frames per second (fps). The standard for video streaming is 29.97 fps in the United States and Japan, and 25 fps in the rest of the world.

**frame size**: The dimensions of a frame of video, measured in pixels. Width comes first, followed by height: The frame size 640x480 is 640 pixels wide by 480 pixels high.

Encodings and bitrate renditions are often named for the frame height, such as 1080p or 1080i, where p refers to progressive (noninterlaced) scanning and i refers to interlaced scanning. The p does not mean pixels.

**H.263**: A compression standard that was developed for low-bitrate videoconferencing but also supports Flash and RTSP streaming. It has been largely superceded by H.264.

**H.264**: A compression standard that provides higher-quality video with lower bitrates than earlier formats such as H.263. The terms H.264, AVC (advanced video encoding), and MPEG-4 Part 10 are equivalent and interchangeable. H.264 is the current standard for video streaming and is the most commonly used format for encoding live streams and multimedia files for on-demand streaming.

**H.265**: H.265, also called High Efficiency Video Coding (HEVC), is a compression standard that delivers much higher-resolution video at the same bitrate as H.264. Its data compression ratio standard is double that of H.264.

**HLS**: HTTP Live Streaming (HLS) is an HTTP-based specification developed by Apple for delivering adaptive bitrate live and video-on-demand streams from servers to players. HLS streams contain keyframe-aligned groups of MPEG-TS or fragmented MP4 multimedia content called media segments (chunks). HTTP clients call the server-generated manifest file, called a master playlist, to request the segments in order for playback.

Apple has announced an extension to HLS that enables low latency streaming through the use of partial media segments, playlist delta updates, blocking playlist reload, and rendition reports.

**manifest**: Used in HTTP streaming, a manifest is a file that contains (indexes) the content of the stream and the information required to play it. When a player requests the stream, the server responds with the stream's manifest, which the HTTP client uses to order requests for the stream segments and to get metadata, bitrate, and codec information. MPEG-DASH manifest URLs end in .mpd, an acronym for media presentation description. In HLS, HDS, and SRT streaming, the manifest is called a playlist.

**Microsoft Smooth Streaming**: An HTTP-based specification developed by Microsoft for delivering adaptive-bitrate live or video-on-demand streams from servers to clients for playback using Microsoft Silverlight technology.

**MPEG**: Moving Picture Experts Group (MPEG) is the ISO working group that defines standards for the coded representation of digital audio, video, 3D graphics, and other data.

**MPEG-DASH**: Dynamic Adaptive Streaming over HTTP (DASH), or MPEG-DASH, is an ISO standard for HTTP-based adaptive bitrate streaming. Like the proprietary HTTP-based technologies Apple HLS, Adobe HDS, and Microsoft Smooth Streaming, MPEG-DASH delivers sequenced segments of audio and video content from a server to a player.

MPEG-DASH streams include a list of the available segment URLs in a manifest, which describes segment information and media characteristics. Clients request segments sequentially based on network conditions, device capabilities, and other factors to enable uninterrupted playback of the adaptive bitrate stream.

**segment (chunk)**: In HTTP-based streaming, a segment is a small, keyframe-aligned and indexable bit of a stream, usually between 2 and 10 seconds long, that’s transferred from a server to a client. Stream segments are reconstructed sequentially on playback. In adaptive bitrate streaming, switching occurs at segment breaks.

**trick play**: The capability to fast-forward and rewind on-demand streams.

**Video-on-demand (VOD)** streaming uses a multimedia file as the source. It's always available, always plays from the beginning (or other specified start point), and has a fixed duration. By comparison, a live stream is always played in progress, is only available while it's live, and has an unknown duration. VOD streaming is synonymous with on-demand streaming.

### The Media Source Extensions

The “Media Source Extensions” (more often shortened to just “MSE”) is a specification from the W3C that most browsers implement today. It was created to allow those complex media use cases directly with HTML and JavaScript. Those “extensions” add the MediaSource object to JavaScript. As its name suggests, this will be the source of the video, or put more simply, this is the object representing our video’s data.

#### The Source Buffers

The video is not actually directly “pushed” into the MediaSource for playback, SourceBuffers are used for that. A MediaSource contains one or multiple instances of those. Each being associated with a type of content. To stay simple, let’s just say that we have only three possible types:

-   audio
-   video
-   both audio and video

> In reality, a “type” is defined by its MIME type, which may also include information about the media codec(s) used

SourceBuffers are all linked to a single MediaSource and each will be used to add video’s data to the HTML5 video tag directly in JavaScript. For example, a frequent use case is to have two source buffers on our MediaSource: one for the video data, and the other for the audio.

### What Is a Codec

Literally ‘coder-decoder’ or ‘compressor-decompressor,’ codecs apply algorithms to tightly compress a bulky video for delivery. The video is shrunk down for storage and transmission, and later decompressed for viewing.

When it comes to streaming, codecs employ lossy compression by discarding unnecessary data to create a smaller file. Two separate compression processes take place: video and audio. Video codecs act upon the visual data, whereas audio codecs act upon the recorded sound.

H.264, also known as AVC (Advanced Video Coding), is the most common video codec. AAC (Advanced Audio Coding) is the most common audio codec.

Codec can be Lossy & Lossless: A codec can be hardware (like a physical appliance) or software that compresses audio and video into a file format for transmission then decodes the file to it can be played. Simply put, it's an algorithm. There are two kinds of codecs, lossy and lossless. Lossy codecs are typically used in streaming since they are smaller. Lossless codecs are used in storage and archiving media.

### What Is a Video Container Format

Video container formats, also called wrappers, hold all the components of a compressed stream. This could include the audio codec, video codec, closed captioning, and any associated metadata such as subtitles or preview images. Common containers include .mp4, .mov, .ts, and .wmv.

### What Is a Streaming Protocol

A protocol is a set of rules governing how data travels from one device to another. For instance, the Hypertext Transfer Protocol (HTTP) deals with hypertext documents and webpages. Online video delivery uses both streaming protocols and HTTP-based protocols. Streaming protocols like Real-Time Messaging Protocol (RTMP) offer fast video delivery, whereas HTTP-based protocols can help optimize the viewing experience.

Essentially, a streaming protocol defines a specific method for sending “chunks” of content from one device to another. It also defines the method for “reassembling” these chunks into playable content on the other end.

That points toward one important aspect of streaming protocols: both the output device and the viewer have to support the protocol in order for it to work. If, for example, you’re sending a stream in MPEG-DASH, but the video player on the device to which you’re streaming doesn’t support MPEG-DASH, your stream won’t work.

#### HTTP-Based Adaptive Streaming Protocols

The industry eventually shifted in favor of HTTP-based technologies. Streams deployed over HTTP are not technically “streams.” Rather, they’re progressive downloads sent via regular web servers.

Using adaptive bitrate streaming, HTTP-based protocols deliver the best video quality and viewer experience possible — no matter the connection, software, or device. Some of the most common HTTP-based protocols include MPEG-DASH and Apple’s HLS. RTMP streams can also be configured for adaptive bitrate streaming, but it’s not nearly as easy.

HTTP-based protocols are stateless, meaning they can be delivered using a regular old web server. That said, they fall on the high end of the latency spectrum.

HTTP-based protocols can cause 10-45 seconds in latency.

### Video on Demand vs. Live Streaming

Video streaming can take the form of both live and recorded content. With live streaming, the content plays as it’s being captured. Examples of this range from video chats and interactive games to endoscopy cameras and streaming drones.

Video on demand (VOD), on the other hand, describes prerecorded content that internet-connected users can stream by request. Some top players in this space include Netflix, Amazon Prime, Hulu, and Sling. YouTube’s David After Dentist and Netflix’s Stranger Things are both examples of VOD content.

### What Is Encoding

Video encoding refers to the process of converting raw video into a digital format that’s compatible with many devices. Videos are often reduced from gigabytes of data down to megabytes of data. This process involves a two-part compression tool called a codec.

### Multicasting vs. Simulcasting vs. Re-stream

-   Broadcasting one stream from a server to multiple destinations in single transmission is referred to as multicast.
-   You can re-stream from a multicast address, but this is a re-broadcast and its not really live.

-

#### What Is Simulcasting

> Simulcast is broadcasting across multiple platforms like Facebook Live and a web page, all live at the same time.

Simulcasting is the ability to take one video stream and broadcast it to multiple destinations at the same time — thereby maximizing your impact. This allows you to reach a broader audience, no matter which platform or service your viewers prefer.

### Transmuxing, Transcoding, Transizing, Transrating

All of these are crucial during the live streaming video process as viewers watch on a variety of devices. These steps have to happen quickly and efficiently so no one gets stuck behind in the spoiler danger zone.

-   Transmuxing (transcode-multiplexing): Taking the compressed audio and video and repackaging it into a different container format. This allows delivery across different protocols without manipulating the actual file. Think of transmuxing like converting a word doc into a pdf and vice versa.
-   Transcoding: An umbrella term for taking a compressed/encoded file and decompressing/decoding it to alter in some way. The manipulated file is then recompressed for delivery. Transrating and transizing are both subcategories of transcoding.
-   Transrating: Changing the bitrate of the decompressed file to accommodate different connection speeds. This can include changing the frame rate or changing the resolution. This is the process of moving from one bitrate to another without changing the file format. Think of this move as going to a lower bitrate for file transfer.
-   Transizing: Resizing the video frame — or resolution — to accommodate different screens.

Rather than creating one live stream at one bitrate, transcoding allows you to create multiple streams at different bitrates and resolutions. That way, your live streams can dynamically adapt to fit the screen sizes and internet speeds of all your viewers. This is known as adaptive bitrate (ABR) streaming.

### What Is Adaptive Bitrate Streaming

Adaptive bitrate (ABR) streaming involves outputting multiple renditions of the original video stream to enable playback on a variety of devices and connection speeds. Content distributors use adaptive bitrate streaming to deliver high-quality streams to users with outstanding bandwidth and processing power, while also accommodating those lacking in the speed and power departments.

The result? No buffering or stream interruptions. Plus, as a viewer’s signal strength goes from two bars to three, the stream automatically adjusts to deliver a superior rendition.

#### How Does Adaptive Bitrate Streaming Work

The first step to adaptive bitrate streaming is creating multiple renditions of the original stream to provide a variety of resolution and bitrate options. These transcoded files fall on an encoding ladder. At the bottom, a high-bitrate, high-frame-rate, high-resolution stream can be output for viewers with the most high-tech setups. At the top of the ladder, the same video in low quality is available for viewers with small screens and poor service.

During the process of transcoding, these renditions are broken into segments that are 2-10 seconds in length. The video player can then use whichever rendition is best suited for its display, processing power, and connectivity. If power and connectivity change mid-stream, the video will automatically switch to another step on the ladder.

With adaptive bitrate streaming, mobile viewers with poor connections don’t have to wait for the stream to load. And for those plugged into high-speed internet, a higher-resolution alternative can play.

### What is constant bitrate (CBR)

A constant bitrate means that data comes at the same rate all throughout the video. The problem with a constant bitrate is that, unless the stream is just a static image, video segments will change. Some segments will have more detail and some less. This translates to lower quality during complex segments and unused bandwidth on simple segments. Some streaming services will still use constant bitrates, but these instances are rare.

### What is variable bitrate (VBR)

Variable bitrate is the data transfer method of choice for the majority of circumstances because encoders can adapt to the demands of each segment of video. VBR essentially allocates more data during complex segments and less data during simple segments. If your stream has a segment of someone standing in front of a plain white background, the encoder can determine that the video needs less data in order to look good and will transfer less. If a concert is being streamed, the encoder can see changing details and transfer more data when needed.

There’s also such a thing as a simultaneous viewer limit that acts as a protection mechanism, preventing a broadcasting system from crashing. Thus, you have to decide how many simultaneous connections your server will support. To ensure frictionless mobile app streaming, you need to take into account the following:

-   Server-side and user-side bandwidth
-   Processor decoding/recoding time
-   Processor quality downgrading time
-   Video and audio processing
-   Disk storage space

### In the real — web — world

The core concepts behind videos on the web lay on media segments being pushed dynamically in JavaScript. This behavior becomes quickly pretty complex, as there’s a lot of features a video player has to support:

-   it has to download and parse some sort of manifest file
-   it needs to register user preferences (for example, the preferred languages)
-   it has to guess the current network conditions
-   it has to know which segment to download depending on at least the two previous points
-   it has to manage a segment pipeline to download sequentially the right segments at the right time (downloading every segment at the same time would be inefficient: you need the earliest one sooner than the next one)
-   it has also to deal with subtitles, often entirely managed in JS
-   Some video players also manage a thumbnails track, which you can often see when hovering the progress bar
-   Many services also require DRM management

Still, at their core, complex web-compatible video players are all based on MediaSource and SourceBuffers.
