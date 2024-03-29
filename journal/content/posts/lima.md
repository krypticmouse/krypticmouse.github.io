---
title: "LIMA: Less is More for Alignment"
date: 2023-05-31
draft: false
---

I can't even being to explain how I felt reading this paper, the moment I finished it I shared it ASAP with everyone because it deserved it. Essentially, what LIMA wants to address is that big instruction dataset and RLHF aren't necessary to produce high quality output. 

As I mentioned above, what LIMA wants to address is that big instruction dataset and RLHF aren't necessary to produce high quality output. But aside from that it's an investigation on how much examples are needed to align a model output? I'm gonna explain more soon but that's that basic idea of the paper. Let's just dive into it.

## Superficial Alignment Hypothesis

Going by the current trends, LLMs are trained in two steps:-

* **Pretraining Step**, where we train model in unsupervised fashion which can be language modelling, Mask Language Modelling, etc.
* **Alignment Step**, where we tune the model via RLHF and Instruction tuning to better align model output to user input.

For Alignment there has been major research done around RLHF, automating RLHF, creating large af datasets for instruction tuning, etc. But do we need that? LIMA proposes a **Superficial Alignment Hypothesis** which basically says:-

> *A model’s knowledge and capabilities are learnt almost entirely during pretraining, while alignment teaches it which subdistribution of formats should be used when interacting with users.*

I wonder if this is Meta's way of saying "F**k You Ope..." Let's get back to the topic. So what the hypothesis suggests is that almost all the knowledge in model is acquired in pre-training and alignment is more for the styling the output to put it vaguely. Which gives rise to a corollary of this hypothesis that one can sufficiently tune a pretrained language model with a rather small set of examples i.e. of course only if this hypothesis is true.

## How much Less is More?

I couldn't come up with a more decent title but seriously, how less are we talking about? 50k? 10k? It's actually 1k, I know right! This data was collected from forums and also crafted manually by humans! Basically the distribution is as follows:-

* **200(out of 1000) instructions** in the training data was written manually from scratch.
* **50 instructions** in the validation data was written manually from scratch, basically the whole validation dataset.
* **230 instructions** in the validation data was written manually from scratch, which is ~77% of the data.

But But But!! That's not all, they found that the model trained on this data can do multi turn dialogue or dialogue chains ok-ishly on zero-shot and this ability sky rockets if you add just 30, yes 30 😱😱, dialogue chains in training set(i.e. 1030 examples now).

## Why Less is More: Quality vs Quantity

So if I put in 1000 examples of any kind it'll work? Not really, from what they mentioned in paper the dataset should have: where the outputs (responses) are stylistically aligned with each other, but the inputs (prompts) are diverse. Basically the examples you choose have to be very selected and specifically with inputs that are diverse in domain and style, while the output being more homogenous in style. Infact this statement is backed by the follow paragraph from their ablation study:-

> _**Diversity** To test the effects of prompt diversity, while controlling for quality and quantity, we compare the effect of training on quality-filtered Stack Exchange data, which has heterogeneous prompts with excellent responses, and wikiHow data, which has homogeneous prompts with excellent responses. While we compare Stack Exchange with wikiHow as a proxy for diversity, we acknowledge that there may be other conflating factors when sampling data from two different sources. We sample 2,000 training examples from each source (following the same protocol from Section 2.1). Figure 5 shows that the more diverse Stack Exchange data yields significantly higher performance._
> 
> _**Quality** To test the effects of response quality, we sample 2,000 examples from Stack Exchange without any quality or stylistic filters, and compare a model trained on this dataset to the one trained on our filtered dataset. Figure 5 shows that there is a significant 0.5 point difference between models trained on the filtered and unfiltered data sources._

## Conclusion

It's fascinating to consider the implications of the LIMA paper. It challenges the traditional methods of alignment and opens up new possibilities in training large language models. However, it's worth noting that the results obtained are based on a specific model and training set, so it's possible that other models might behave differently. Also, it's important to remember that while a smaller instruction set might be effective, the quality of that instruction set is paramount. It will be exciting to see how this line of research develops in the future!
