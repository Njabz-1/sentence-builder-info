/****** Object:  Table [dbo].[Sentences]    Script Date: 6/1/2023 1:06:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sentences](
	[sentence_id] [int] IDENTITY(1,1) NOT NULL,
	[sentence] [nvarchar](255) NULL,
	[creation_date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[sentence_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TestSentences]    Script Date: 6/1/2023 1:06:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestSentences](
	[sentence_id] [int] IDENTITY(1,1) NOT NULL,
	[sentence] [nvarchar](255) NULL,
	[creation_date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[sentence_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Words]    Script Date: 6/1/2023 1:06:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Words](
	[word_id] [int] IDENTITY(1,1) NOT NULL,
	[word_type] [nvarchar](50) NULL,
	[word] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[word_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Sentences] ADD  DEFAULT (getdate()) FOR [creation_date]
GO
ALTER TABLE [dbo].[TestSentences] ADD  DEFAULT (getdate()) FOR [creation_date]
GO
