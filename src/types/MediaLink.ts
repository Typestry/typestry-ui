/**
 * Represents a media link with its associated information.
 */
export interface MediaLink {
  /**
   * The URL of the media link.
   */
  url: string

  /**
   * The image associated with the media link.
   * Replace with the actual image URL or path.
   */
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  /**
   * The alternative text for the image.
   */
  alt: string

  /**
   * The title or name of the media platform.
   */
  title: string
}

/**
 * Represents a collection of media links for different platforms.
 * The keys are platform names and the values are corresponding MediaLink objects.
 */
export type MediaLinks = { [key: string]: MediaLink }
