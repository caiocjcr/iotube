import styled, { css } from 'styled-components'

export const VideoSnippetWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    @media (min-width: 768px) {
      flex-direction: row;
      width: clamp(192px, 100vw, 680px);
    }

    .thumbnail-container {
      &:after {
        content: '';
        height: 4px;
        width: 0px;
        background-color: ${theme.primary};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.2s ease-out;
      }
    }

    .video-info {
      max-height: 160px;
      overflow: hidden;
      position: relative;
      &:after {
        content: '';
        width: 100%;
        height: 96px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          0deg,
          ${theme.background} 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    &.vertical {
      .thumbnail-container {
        height: 200px;
        @media (min-width: 768px) {
          width: 100%;
          height: unset;
        }
      }
      @media (min-width: 768px) {
        width: 360px;
        flex-direction: column;
        margin: 32px 0px;

        .thumbnail-container {
          width: 100%;
        }
      }
    }

    &:hover {
      .thumbnail-container {
        &:after {
          width: 100%;
        }
      }
    }
  `
)

export const ThumbnailContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;

  @media (min-width: 768px) {
    width: 360px;
    flex-shrink: 0;
  }
`
